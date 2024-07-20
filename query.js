const { Pool } = require("pg");

const pool = new Pool({
  user: "myuser",
  host: "localhost",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});

const paramMapping = {
  top_scorer: "goals_total",
  top_assist_maker: "goals_assists",
  highest_minutes: "games_minutes",
  highest_tackles: "tackles_total",
  highest_blocks: "tackles_blocks",
  highest_shots_on_target: "shots_on",
};

const executeQuery = async (query, params = []) => {
  try {
    const result = await pool.query(query, params);
    console.log(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

const getTeamSeasonAggStats = async (leagueId, season, teamId) => {
  const query = `
    SELECT
      COUNT(*) AS matches_played,
      SUM(CASE WHEN (teams_home_id = $3 AND teams_home_winner = true) OR (teams_away_id = $3 AND teams_away_winner = true) THEN 1 ELSE 0 END) AS matches_won,
      SUM(CASE WHEN (teams_home_id = $3 AND teams_home_winner = false AND goals_home != goals_away) OR (teams_away_id = $3 AND teams_away_winner = false AND goals_home != goals_away) THEN 1 ELSE 0 END) AS matches_lost,
      SUM(CASE WHEN goals_home = goals_away THEN 1 ELSE 0 END) AS matches_draw,
      SUM(CASE WHEN teams_home_id = $3 THEN goals_home ELSE goals_away END) AS goals_for,
      SUM(CASE WHEN teams_home_id = $3 THEN goals_away ELSE goals_home END) AS goals_against,
      SUM(CASE WHEN teams_home_id = $3 THEN goals_home ELSE 0 END) - SUM(CASE WHEN teams_home_id = $3 THEN goals_away ELSE 0 END) +
      SUM(CASE WHEN teams_away_id = $3 THEN goals_away ELSE 0 END) - SUM(CASE WHEN teams_away_id = $3 THEN goals_home ELSE 0 END) AS goal_diff,
      SUM(CASE WHEN (teams_home_id = $3 AND teams_home_winner = true) OR (teams_away_id = $3 AND teams_away_winner = true) THEN 3
               WHEN goals_home = goals_away THEN 1 ELSE 0 END) AS points_total
    FROM fixtures
    WHERE league_id = $1 AND league_season = $2 AND (teams_home_id = $3 OR teams_away_id = $3)
  `;
  await executeQuery(query, [leagueId, season, teamId]);
};

const getTeamSeasonPerformance = async (leagueId, season, teamId) => {
  const query = `
    SELECT
      CASE WHEN teams_home_id = $3 THEN teams_away_name ELSE teams_home_name END AS opponent_team,
      CASE WHEN teams_home_id = $3 THEN goals_home ELSE goals_away END AS goals_scored,
      CASE WHEN teams_home_id = $3 THEN goals_away ELSE goals_home END AS goals_conceded,
      CASE
        WHEN (teams_home_id = $3 AND teams_home_winner = true) OR (teams_away_id = $3 AND teams_away_winner = true) THEN 'win'
        WHEN goals_home = goals_away THEN 'draw'
        ELSE 'loss'
      END AS final_result,
      fixture_date
    FROM fixtures
    WHERE league_id = $1 AND league_season = $2 AND (teams_home_id = $3 OR teams_away_id = $3)
    ORDER BY fixture_date
  `;
  await executeQuery(query, [leagueId, season, teamId]);
};

// Define your queries
const queries = {
  getLeagues:
    "SELECT DISTINCT league_id, league_name, league_season FROM fixtures",
  getFixtures:
    "SELECT teams_home_id, teams_home_name, teams_home_logo, teams_home_winner, teams_away_id, teams_away_name, teams_away_logo, teams_away_winner, league_season FROM fixtures WHERE league_id = $1 AND league_season = $2",
  getPointsTable: `SELECT
            teams_home_id AS team_id, teams_home_name AS team_name,
            SUM(CASE WHEN teams_home_winner = true THEN 3 WHEN goals_home = goals_away THEN 1 ELSE 0 END) AS points
          FROM fixtures
          WHERE league_id = $1 AND league_season = $2
          GROUP BY teams_home_id, teams_home_name
          UNION
          SELECT
            teams_away_id AS team_id, teams_away_name AS team_name,
            SUM(CASE WHEN teams_away_winner = true THEN 3 WHEN goals_home = goals_away THEN 1 ELSE 0 END) AS points
          FROM fixtures
          WHERE league_id = $1 AND league_season = $2
          GROUP BY teams_away_id, teams_away_name
          ORDER BY points DESC`,
  getSeasonTopPlayerParams: `SELECT
          'top_scorer' AS param_name,
          'top_assist_maker' AS param_name,
          'highest_minutes' AS param_name,
          'highest_clean_sheets' AS param_name,
          'highest_tackles' AS param_name,
          'highest_blocks' AS param_name,
          'highest_shots_on_target' AS param_name`,
  getSeasonTopPlayer: async (leagueId, season, param, limit = 10) => {
    const columnName = paramMapping[param];
    if (!columnName) {
      console.error(`Invalid param: ${param}`);
      return;
    }

    const query = `
      SELECT
        p.id AS player_id, p.name AS player_name, fps.${columnName} AS value
      FROM fixture_players_statistics fps
      JOIN fixtures f ON fps.fixture_id = f.fixture_id
      JOIN players p ON fps.players_id = p.id
      WHERE f.league_id = $1 AND f.league_season = $2
      ORDER BY fps.${columnName} DESC
      LIMIT $3
    `;
    await executeQuery(query, [leagueId, season, limit]);
  },
  getPlayerSeasonAggStats: async (leagueId, season, playerId) => {
    const query = `
      SELECT
        SUM(fps.goals_total) AS goals_total,
        SUM(fps.goals_assists) AS goals_assists,
        SUM(fps.games_minutes) AS games_minutes,
        SUM(fps.tackles_total) AS tackles_total,
        SUM(fps.tackles_blocks) AS tackles_blocks,
        SUM(fps.shots_on) AS shots_on
      FROM fixture_players_statistics fps
      JOIN fixtures f ON fps.fixture_id = f.fixture_id
      WHERE f.league_id = $1 AND f.league_season = $2 AND fps.players_id = $3
      GROUP BY fps.players_id
    `;
    await executeQuery(query, [leagueId, season, playerId]);
  },
  getPlayerSeasonPerformance: async (leagueId, season, playerId) => {
    const queries = Object.entries(paramMapping).map(([param, columnName]) => {
      return {
        param,
        query: `
          SELECT
            p.id AS player_id, p.name AS player_name, f.teams_home_name AS opponent_team, fps.${columnName} AS value, f.fixture_date
          FROM fixture_players_statistics fps
          JOIN fixtures f ON fps.fixture_id = f.fixture_id
          JOIN players p ON fps.players_id = p.id
          WHERE f.league_id = $1 AND f.league_season = $2 AND fps.players_id = $3
          ORDER BY f.fixture_date
        `,
      };
    });

    for (const { param, query } of queries) {
      console.log(`Performance for param: ${param}`);
      await executeQuery(query, [leagueId, season, playerId]);
    }
  },
};

const runQueries = async () => {
  await executeQuery(queries.getLeagues);
  await executeQuery(queries.getFixtures, ["140", "2021"]);
  await executeQuery(queries.getPointsTable, ["140", "2023"]);
  await executeQuery(queries.getSeasonTopPlayerParams);
  await queries.getSeasonTopPlayer("135", "2023", "top_scorer");
  await queries.getPlayerSeasonAggStats("135", "2023", "101");
  await getTeamSeasonAggStats("61", "2022", "110");
  await queries.getPlayerSeasonPerformance("140", "2022", "885");
  await getTeamSeasonPerformance("140", "2023", "529");
  await pool.end();
};

runQueries();
