const fs = require("fs");
const path = require("path");
const pool = require("./src/db/db");
const csv = require("csv-parser");
const moment = require("moment");

const convertToNumeric = (value) => {
  // Check if value is a valid number
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    console.log(`Invalid numeric value: ${value}`);
    return null;
  }
  return numericValue;
};

const convertToTimestamp = (value) => {
  if (value === "") return null;

  // Check if the value is a numeric string representing a Unix timestamp
  if (!isNaN(value)) {
    const unixTimestamp = parseInt(value, 10);
    // Convert the Unix timestamp to a standard date format
    return moment.unix(unixTimestamp).format("YYYY-MM-DD HH:mm:ss");
  }

  const formats = [
    moment.ISO_8601,
    "YYYY-MM-DD",
    "YYYY-MM-DD HH:mm:ss",
    "MM/DD/YYYY",
    "MM/DD/YYYY HH:mm:ss",
    // Add other date formats as needed
  ];

  for (const format of formats) {
    const parsedDate = moment(value, format, true);
    if (parsedDate.isValid()) {
      return parsedDate.format("YYYY-MM-DD HH:mm:ss");
    }
  }

  console.log(`Invalid date format for value: ${value}`);
  return null;
};

const convertToBoolean = (value) => {
  if (value === "True" || value === "true" || value === "1") return true;
  if (value === "False" || value === "false" || value === "0") return false;
  return null;
};

const loadCSV = (filePath, tableName, columns) => {
  return new Promise((resolve, reject) => {
    const queries = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        const values = columns.map((col) => {
          let value = row[col];
          if (!value && value !== 0) return null; // Handle empty strings and null values

          // Handle numeric fields
          if (
            col.includes("id") ||
            col.includes("goals") ||
            col.includes("score") ||
            col.includes("minutes") ||
            col.includes("number") ||
            col.includes("offsides") ||
            col.includes("shots") ||
            col.includes("passes") ||
            col.includes("tackles") ||
            col.includes("duels") ||
            col.includes("dribbles") ||
            col.includes("fouls") ||
            col.includes("cards") ||
            col.includes("penalty") ||
            col.includes("fixture_timestamp")
          ) {
            value = convertToNumeric(value);
          }
          // Handle timestamp fields
          else if (col.includes("date") || col.includes("timestamp")) {
            value = convertToTimestamp(value);
          }
          // Handle boolean fields
          else if (
            col.includes("captain") ||
            col.includes("substitute") ||
            col.includes("winner")
          ) {
            value = convertToBoolean(value);
          }
          return value;
        });

        console.log(`Inserting into ${tableName}:`, values); // Log values being inserted

        const query = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${values.map((_, i) => `$${i + 1}`).join(", ")})`;
        queries.push(pool.query(query, values));
      })
      .on("end", async () => {
        try {
          await Promise.all(queries);
          console.log(`Data from ${filePath} loaded into ${tableName}`);
          resolve();
        } catch (err) {
          console.error(`Error loading data from ${filePath}`, err);
          reject(err);
        }
      });
  });
};

const loadAllData = async () => {
  try {
    await loadCSV(path.join(__dirname, "data/players.csv"), "players", [
      "id",
      "name",
      "age",
      "number",
      "position",
      "photo",
      "batch_timestamp",
    ]);

    await loadCSV(path.join(__dirname, "data/fixtures.csv"), "fixtures", [
      "fixture_id",
      "fixture_referee",
      "fixture_timezone",
      "fixture_date",
      "fixture_timestamp",
      "fixture_periods_first",
      "fixture_periods_second",
      "fixture_venue_id",
      "fixture_venue_name",
      "fixture_venue_city",
      "fixture_status_long",
      "fixture_status_short",
      "fixture_status_elapsed",
      "league_id",
      "league_name",
      "league_country",
      "league_logo",
      "league_flag",
      "league_season",
      "league_round",
      "teams_home_id",
      "teams_home_name",
      "teams_home_logo",
      "teams_home_winner",
      "teams_away_id",
      "teams_away_name",
      "teams_away_logo",
      "teams_away_winner",
      "goals_home",
      "goals_away",
      "score_halftime_home",
      "score_halftime_away",
      "score_fulltime_home",
      "score_fulltime_away",
      "score_extratime_home",
      "score_extratime_away",
      "score_penalty_home",
      "score_penalty_away",
      "batch_timestamp",
    ]);

    await loadCSV(
      path.join(__dirname, "data/fixture_players_statistics.csv"),
      "fixture_players_statistics",
      [
        "team_id",
        "players_id",
        "games_minutes",
        "games_number",
        "games_position",
        "games_rating",
        "games_captain",
        "games_substitute",
        "offsides",
        "shots_total",
        "shots_on",
        "goals_total",
        "goals_conceded",
        "goals_assists",
        "goals_saves",
        "passes_total",
        "passes_key",
        "passes_accuracy",
        "tackles_total",
        "tackles_blocks",
        "tackles_interceptions",
        "duels_total",
        "duels_won",
        "dribbles_attempts",
        "dribbles_success",
        "dribbles_past",
        "fouls_drawn",
        "fouls_committed",
        "cards_yellow",
        "cards_red",
        "penalty_won",
        "penalty_commited",
        "penalty_scored",
        "penalty_missed",
        "penalty_saved",
        "fixture_id",
        "batch_timestamp",
      ],
    );

    console.log("All data loaded successfully");
    pool.end();
  } catch (err) {
    console.error("Error loading data", err);
    pool.end();
  }
};

loadAllData();
