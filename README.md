# FootballBackend

This project is a Football Backend Management system built using  Express, PostgreSQL, and Docker.

## Setup Instructions

Follow these steps to set up the project:

1. **Clone the repository**

   ```bash
   https://github.com/mangalamraj/FootballBackend.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd FootballBackend
   ```

3. **Install the dependencies**

   ```bash
   npm install
   ```

4. **Add your database URL**

   In the project directory, create a `.env` file and add your database URL:

   ```env
   DATABASE_URL=your_database_url
   ```
4. **Change the url in docker-compose too**

   
5. **Run Docker Compose**

   ```bash
   docker-compose up
   ```
6. **Setup DB**

   ```bash
   docker-compose run app node setupDb.js
   ```
7. **Add Data**

   ```bash
   docker-compose run app node loadCsvData.js
   ```

5. **Run and check the terminal for output**

   ```bash
   node query.js
   ```

## Technologies Used

- **Express**: Web framework for Node.js
- **PostgreSQL**: Relational database
- **Docker**: Containerization platform




## Repository

[[FootBallBackend Management GitHub Repository](https://github.com/mangalamraj/FootballBackend.git)
](https://github.com/mangalamraj/FootballBackend.git)

## ANSWER

[
  { league_id: 140, league_name: 'La Liga', league_season: 2021 },
  { league_id: 78, league_name: 'Bundesliga', league_season: 2022 },
  { league_id: 140, league_name: 'La Liga', league_season: 2019 },
  { league_id: 78, league_name: 'Bundesliga', league_season: 2021 },
  { league_id: 135, league_name: 'Serie A', league_season: 2022 },
  { league_id: 39, league_name: 'Premier League', league_season: 2020 },
  { league_id: 39, league_name: 'Premier League', league_season: 2019 },
  { league_id: 39, league_name: 'Premier League', league_season: 2021 },
  { league_id: 140, league_name: 'La Liga', league_season: 2022 },
  { league_id: 61, league_name: 'Ligue 1', league_season: 2022 },
  { league_id: 135, league_name: 'Serie A', league_season: 2020 },
  { league_id: 39, league_name: 'Premier League', league_season: 2022 },
  { league_id: 39, league_name: 'Premier League', league_season: 2023 },
  { league_id: 135, league_name: 'Serie A', league_season: 2019 },
  { league_id: 78, league_name: 'Bundesliga', league_season: 2019 },
  { league_id: 61, league_name: 'Ligue 1', league_season: 2021 },
  { league_id: 78, league_name: 'Bundesliga', league_season: 2020 },
  { league_id: 61, league_name: 'Ligue 1', league_season: 2023 },
  { league_id: 78, league_name: 'Bundesliga', league_season: 2023 },
  { league_id: 135, league_name: 'Serie A', league_season: 2023 },
  { league_id: 140, league_name: 'La Liga', league_season: 2020 },
  { league_id: 61, league_name: 'Ligue 1', league_season: 2020 },
  { league_id: 135, league_name: 'Serie A', league_season: 2021 },
  { league_id: 140, league_name: 'La Liga', league_season: 2023 },
  { league_id: 61, league_name: 'Ligue 1', league_season: 2019 }
]



[
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_home_winner: false,
    teams_away_id: 541,
    teams_away_name: 'Real Madrid',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_home_winner: false,
    teams_away_id: 798,
    teams_away_name: 'Mallorca',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/798.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 530,
    teams_home_name: 'Atletico Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/530.png',
    teams_home_winner: null,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 533,
    teams_home_name: 'Villarreal',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/533.png',
    teams_home_winner: null,
    teams_away_id: 715,
    teams_away_name: 'Granada CF',
    teams_away_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_home_winner: null,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/531.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_home_winner: false,
    teams_away_id: 541,
    teams_away_name: 'Real Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/541.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 546,
    teams_home_name: 'Getafe',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/546.png',
    teams_home_winner: false,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/797.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/543.png',
    teams_home_winner: null,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/540.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media.api-sports.io/football/teams/529.png',
    teams_home_winner: true,
    teams_away_id: 548,
    teams_away_name: 'Real Sociedad',
    teams_away_logo: 'https://media.api-sports.io/football/teams/548.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 530,
    teams_home_name: 'Atletico Madrid',
    teams_home_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_home_winner: true,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/797.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 548,
    teams_home_name: 'Real Sociedad',
    teams_home_logo: 'https://media.api-sports.io/football/teams/548.png',
    teams_home_winner: true,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/797.png',
    teams_home_winner: null,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 533,
    teams_home_name: 'Villarreal',
    teams_home_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_home_winner: true,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_home_winner: null,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/540.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 539,
    teams_home_name: 'Levante',
    teams_home_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_home_winner: null,
    teams_away_id: 541,
    teams_away_name: 'Real Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/541.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 548,
    teams_home_name: 'Real Sociedad',
    teams_home_logo: 'https://media.api-sports.io/football/teams/548.png',
    teams_home_winner: true,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/539.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_home_winner: true,
    teams_away_id: 538,
    teams_away_name: 'Celta Vigo',
    teams_away_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_home_winner: null,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 539,
    teams_home_name: 'Levante',
    teams_home_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_home_winner: false,
    teams_away_id: 538,
    teams_away_name: 'Celta Vigo',
    teams_away_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 538,
    teams_home_name: 'Celta Vigo',
    teams_home_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_home_winner: true,
    teams_away_id: 715,
    teams_away_name: 'Granada CF',
    teams_away_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/798.png',
    teams_home_winner: true,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 715,
    teams_home_name: 'Granada CF',
    teams_home_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_home_winner: true,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_home_winner: null,
    teams_away_id: 715,
    teams_away_name: 'Granada CF',
    teams_away_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_home_winner: null,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 536,
    teams_home_name: 'Sevilla',
    teams_home_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_home_winner: true,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/727.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 538,
    teams_home_name: 'Celta Vigo',
    teams_home_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_home_winner: null,
    teams_away_id: 529,
    teams_away_name: 'Barcelona',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/529.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/529.png',
    teams_home_winner: true,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media.api-sports.io/football/teams/540.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_home_winner: true,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/539.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_home_winner: true,
    teams_away_id: 546,
    teams_away_name: 'Getafe',
    teams_away_logo: 'https://media.api-sports.io/football/teams/546.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 715,
    teams_home_name: 'Granada CF',
    teams_home_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_home_winner: null,
    teams_away_id: 532,
    teams_away_name: 'Valencia',
    teams_away_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 538,
    teams_home_name: 'Celta Vigo',
    teams_home_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_home_winner: false,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/531.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 724,
    teams_home_name: 'Cadiz',
    teams_home_logo: 'https://media.api-sports.io/football/teams/724.png',
    teams_home_winner: false,
    teams_away_id: 548,
    teams_away_name: 'Real Sociedad',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/548.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/529.png',
    teams_home_winner: null,
    teams_away_id: 715,
    teams_away_name: 'Granada CF',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/715.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 724,
    teams_home_name: 'Cadiz',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/724.png',
    teams_home_winner: null,
    teams_away_id: 529,
    teams_away_name: 'Barcelona',
    teams_away_logo: 'https://media.api-sports.io/football/teams/529.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media.api-sports.io/football/teams/529.png',
    teams_home_winner: true,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 728,
    teams_home_name: 'Rayo Vallecano',
    teams_home_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_home_winner: true,
    teams_away_id: 724,
    teams_away_name: 'Cadiz',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/724.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_home_winner: true,
    teams_away_id: 538,
    teams_away_name: 'Celta Vigo',
    teams_away_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 533,
    teams_home_name: 'Villarreal',
    teams_home_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_home_winner: false,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/727.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/543.png',
    teams_home_winner: true,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_home_winner: null,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/536.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/543.png',
    teams_home_winner: false,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/536.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 539,
    teams_home_name: 'Levante',
    teams_home_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_home_winner: null,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_home_winner: null,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 536,
    teams_home_name: 'Sevilla',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/536.png',
    teams_home_winner: true,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 540,
    teams_home_name: 'Espanyol',
    teams_home_logo: 'https://media.api-sports.io/football/teams/540.png',
    teams_home_winner: null,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_home_winner: true,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/540.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 531,
    teams_home_name: 'Athletic Club',
    teams_home_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_home_winner: true,
    teams_away_id: 798,
    teams_away_name: 'Mallorca',
    teams_away_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_home_winner: false,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/727.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_home_winner: null,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/539.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_home_winner: true,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/530.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 531,
    teams_home_name: 'Athletic Club',
    teams_home_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_home_winner: true,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/542.png',
    teams_home_winner: false,
    teams_away_id: 543,
    teams_away_name: 'Real Betis',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/543.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 531,
    teams_home_name: 'Athletic Club',
    teams_home_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_home_winner: true,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 542,
    teams_home_name: 'Alaves',
    teams_home_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_home_winner: true,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 539,
    teams_home_name: 'Levante',
    teams_home_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_home_winner: null,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 548,
    teams_home_name: 'Real Sociedad',
    teams_home_logo: 'https://media.api-sports.io/football/teams/548.png',
    teams_home_winner: null,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 531,
    teams_home_name: 'Athletic Club',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/531.png',
    teams_home_winner: false,
    teams_away_id: 724,
    teams_away_name: 'Cadiz',
    teams_away_logo: 'https://media.api-sports.io/football/teams/724.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/532.png',
    teams_home_winner: null,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/797.png',
    teams_home_winner: false,
    teams_away_id: 543,
    teams_away_name: 'Real Betis',
    teams_away_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_home_winner: null,
    teams_away_id: 543,
    teams_away_name: 'Real Betis',
    teams_away_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 546,
    teams_home_name: 'Getafe',
    teams_home_logo: 'https://media.api-sports.io/football/teams/546.png',
    teams_home_winner: false,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 724,
    teams_home_name: 'Cadiz',
    teams_home_logo: 'https://media.api-sports.io/football/teams/724.png',
    teams_home_winner: false,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/727.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 539,
    teams_home_name: 'Levante',
    teams_home_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_home_winner: null,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 538,
    teams_home_name: 'Celta Vigo',
    teams_home_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_home_winner: false,
    teams_away_id: 724,
    teams_away_name: 'Cadiz',
    teams_away_logo: 'https://media.api-sports.io/football/teams/724.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/727.png',
    teams_home_winner: false,
    teams_away_id: 543,
    teams_away_name: 'Real Betis',
    teams_away_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 548,
    teams_home_name: 'Real Sociedad',
    teams_home_logo: 'https://media.api-sports.io/football/teams/548.png',
    teams_home_winner: true,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 540,
    teams_home_name: 'Espanyol',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/540.png',
    teams_home_winner: true,
    teams_away_id: 541,
    teams_away_name: 'Real Madrid',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 728,
    teams_home_name: 'Rayo Vallecano',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/728.png',
    teams_home_winner: true,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/797.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/532.png',
    teams_home_winner: null,
    teams_away_id: 798,
    teams_away_name: 'Mallorca',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/798.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 728,
    teams_home_name: 'Rayo Vallecano',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/728.png',
    teams_home_winner: true,
    teams_away_id: 529,
    teams_away_name: 'Barcelona',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/529.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/532.png',
    teams_home_winner: true,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media.api-sports.io/football/teams/533.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_home_winner: false,
    teams_away_id: 548,
    teams_away_name: 'Real Sociedad',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/548.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 728,
    teams_home_name: 'Rayo Vallecano',
    teams_home_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_home_winner: true,
    teams_away_id: 798,
    teams_away_name: 'Mallorca',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/798.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_home_winner: true,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 536,
    teams_home_name: 'Sevilla',
    teams_home_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_home_winner: true,
    teams_away_id: 533,
    teams_away_name: 'Villarreal',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/533.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 538,
    teams_home_name: 'Celta Vigo',
    teams_home_logo: 'https://media.api-sports.io/football/teams/538.png',
    teams_home_winner: false,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 531,
    teams_home_name: 'Athletic Club',
    teams_home_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_home_winner: null,
    teams_away_id: 529,
    teams_away_name: 'Barcelona',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/529.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media.api-sports.io/football/teams/529.png',
    teams_home_winner: true,
    teams_away_id: 546,
    teams_away_name: 'Getafe',
    teams_away_logo: 'https://media.api-sports.io/football/teams/546.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 715,
    teams_home_name: 'Granada CF',
    teams_home_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_home_winner: false,
    teams_away_id: 543,
    teams_away_name: 'Real Betis',
    teams_away_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 530,
    teams_home_name: 'Atletico Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/530.png',
    teams_home_winner: null,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/531.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 546,
    teams_home_name: 'Getafe',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/546.png',
    teams_home_winner: false,
    teams_away_id: 530,
    teams_away_name: 'Atletico Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/530.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 724,
    teams_home_name: 'Cadiz',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/724.png',
    teams_home_winner: null,
    teams_away_id: 532,
    teams_away_name: 'Valencia',
    teams_away_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_home_winner: true,
    teams_away_id: 531,
    teams_away_name: 'Athletic Club',
    teams_away_logo: 'https://media.api-sports.io/football/teams/531.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 797,
    teams_home_name: 'Elche',
    teams_home_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_home_winner: null,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media.api-sports.io/football/teams/540.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 529,
    teams_home_name: 'Barcelona',
    teams_home_logo: 'https://media.api-sports.io/football/teams/529.png',
    teams_home_winner: null,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/541.png',
    teams_home_winner: true,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 536,
    teams_home_name: 'Sevilla',
    teams_home_logo: 'https://media.api-sports.io/football/teams/536.png',
    teams_home_winner: null,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_home_winner: null,
    teams_away_id: 728,
    teams_away_name: 'Rayo Vallecano',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/728.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 728,
    teams_home_name: 'Rayo Vallecano',
    teams_home_logo: 'https://media.api-sports.io/football/teams/728.png',
    teams_home_winner: true,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/540.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/532.png',
    teams_home_winner: true,
    teams_away_id: 797,
    teams_away_name: 'Elche',
    teams_away_logo: 'https://media.api-sports.io/football/teams/797.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 541,
    teams_home_name: 'Real Madrid',
    teams_home_logo: 'https://media.api-sports.io/football/teams/541.png',
    teams_home_winner: null,
    teams_away_id: 724,
    teams_away_name: 'Cadiz',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/724.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_home_winner: false,
    teams_away_id: 540,
    teams_away_name: 'Espanyol',
    teams_away_logo: 'https://media.api-sports.io/football/teams/540.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 724,
    teams_home_name: 'Cadiz',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/724.png',
    teams_home_winner: null,
    teams_away_id: 539,
    teams_away_name: 'Levante',
    teams_away_logo: 'https://media.api-sports.io/football/teams/539.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 543,
    teams_home_name: 'Real Betis',
    teams_home_logo: 'https://media.api-sports.io/football/teams/543.png',
    teams_home_winner: null,
    teams_away_id: 724,
    teams_away_name: 'Cadiz',
    teams_away_logo: 'https://media.api-sports.io/football/teams/724.png',
    teams_away_winner: null,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media-3.api-sports.io/football/teams/532.png',
    teams_home_winner: true,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/542.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 727,
    teams_home_name: 'Osasuna',
    teams_home_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_home_winner: false,
    teams_away_id: 532,
    teams_away_name: 'Valencia',
    teams_away_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 532,
    teams_home_name: 'Valencia',
    teams_home_logo: 'https://media.api-sports.io/football/teams/532.png',
    teams_home_winner: false,
    teams_away_id: 541,
    teams_away_name: 'Real Madrid',
    teams_away_logo: 'https://media.api-sports.io/football/teams/541.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 540,
    teams_home_name: 'Espanyol',
    teams_home_logo: 'https://media.api-sports.io/football/teams/540.png',
    teams_home_winner: true,
    teams_away_id: 542,
    teams_away_name: 'Alaves',
    teams_away_logo: 'https://media.api-sports.io/football/teams/542.png',
    teams_away_winner: false,
    league_season: 2021
  },
  {
    teams_home_id: 798,
    teams_home_name: 'Mallorca',
    teams_home_logo: 'https://media.api-sports.io/football/teams/798.png',
    teams_home_winner: false,
    teams_away_id: 727,
    teams_away_name: 'Osasuna',
    teams_away_logo: 'https://media.api-sports.io/football/teams/727.png',
    teams_away_winner: true,
    league_season: 2021
  },
  {
    teams_home_id: 715,
    teams_home_name: 'Granada CF',
    teams_home_logo: 'https://media.api-sports.io/football/teams/715.png',
    teams_home_winner: true,
    teams_away_id: 536,
    teams_away_name: 'Sevilla',
    teams_away_logo: 'https://media-3.api-sports.io/football/teams/536.png',
    teams_away_winner: false,
    league_season: 2021
  },
  ... 280 more items
]



[
  { team_id: 541, team_name: 'Real Madrid', points: '51' },
  { team_id: 530, team_name: 'Atletico Madrid', points: '49' },
  { team_id: 547, team_name: 'Girona', points: '47' },
  { team_id: 529, team_name: 'Barcelona', points: '46' },
  { team_id: 541, team_name: 'Real Madrid', points: '44' },
  { team_id: 531, team_name: 'Athletic Club', points: '42' },
  { team_id: 529, team_name: 'Barcelona', points: '39' },
  { team_id: 547, team_name: 'Girona', points: '34' },
  { team_id: 543, team_name: 'Real Betis', points: '34' },
  { team_id: 542, team_name: 'Alaves', points: '31' },
  { team_id: 532, team_name: 'Valencia', points: '30' },
  { team_id: 548, team_name: 'Real Sociedad', points: '30' },
  { team_id: 546, team_name: 'Getafe', points: '29' },
  { team_id: 530, team_name: 'Atletico Madrid', points: '27' },
  { team_id: 533, team_name: 'Villarreal', points: '27' },
  { team_id: 531, team_name: 'Athletic Club', points: '26' },
  { team_id: 798, team_name: 'Mallorca', points: '26' },
  { team_id: 533, team_name: 'Villarreal', points: '26' },
  { team_id: 534, team_name: 'Las Palmas', points: '24' },
  { team_id: 538, team_name: 'Celta Vigo', points: '24' },
  { team_id: 724, team_name: 'Cadiz', points: '24' },
  { team_id: 536, team_name: 'Sevilla', points: '23' },
  { team_id: 543, team_name: 'Real Betis', points: '23' },
  { team_id: 727, team_name: 'Osasuna', points: '23' },
  { team_id: 727, team_name: 'Osasuna', points: '22' },
  { team_id: 728, team_name: 'Rayo Vallecano', points: '20' },
  { team_id: 532, team_name: 'Valencia', points: '19' },
  { team_id: 728, team_name: 'Rayo Vallecano', points: '18' },
  { team_id: 536, team_name: 'Sevilla', points: '18' },
  { team_id: 715, team_name: 'Granada CF', points: '18' },
  { team_id: 538, team_name: 'Celta Vigo', points: '17' },
  { team_id: 534, team_name: 'Las Palmas', points: '16' },
  { team_id: 542, team_name: 'Alaves', points: '15' },
  { team_id: 546, team_name: 'Getafe', points: '14' },
  { team_id: 798, team_name: 'Mallorca', points: '14' },
  { team_id: 723, team_name: 'Almeria', points: '11' },
  { team_id: 723, team_name: 'Almeria', points: '10' },
  { team_id: 724, team_name: 'Cadiz', points: '9' },
  { team_id: 715, team_name: 'Granada CF', points: '3' }
]




[ { param_name: 'highest_shots_on_target' } ]



[
  { player_id: 321744, player_name: 'A. Obert', value: null },
  { player_id: 134926, player_name: 'D. Maldini', value: null },
  { player_id: 30573, player_name: 'L. Pavoletti', value: null },
  { player_id: 237, player_name: 'G. Pereiro', value: null },
  { player_id: 30687, player_name: 'S. Bastoni', value: null },
  { player_id: 50054, player_name: 'S. Scuffet', value: null },
  { player_id: 31737, player_name: 'M. Mancosu', value: null },
  { player_id: 319, player_name: 'S. Luperto', value: null },
  { player_id: 30794, player_name: 'S. Perisan', value: null },
  { player_id: 56207, player_name: 'Paulo Azzi', value: null }
]



[]



[
  {
    matches_played: '38',
    matches_won: '4',
    matches_lost: '22',
    matches_draw: '12',
    goals_for: '45',
    goals_against: '81',
    goal_diff: '-36',
    points_total: '24'
  }
]



Performance for param: top_scorer
[]
Performance for param: top_assist_maker
[]
Performance for param: highest_minutes
[]
Performance for param: highest_tackles
[]
Performance for param: highest_blocks
[]
Performance for param: highest_shots_on_target
[]



[
  {
    opponent_team: 'Getafe',
    goals_scored: '0',
    goals_conceded: '0',
    final_result: 'draw',
    fixture_date: 2023-08-13T14:00:00.000Z
  },
  {
    opponent_team: 'Cadiz',
    goals_scored: '2',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-08-20T12:00:00.000Z
  },
  {
    opponent_team: 'Villarreal',
    goals_scored: '4',
    goals_conceded: '3',
    final_result: 'win',
    fixture_date: 2023-08-27T10:00:00.000Z
  },
  {
    opponent_team: 'Osasuna',
    goals_scored: '2',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2023-09-03T13:30:00.000Z
  },
  {
    opponent_team: 'Real Betis',
    goals_scored: '5',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-09-16T13:30:00.000Z
  },
  {
    opponent_team: 'Celta Vigo',
    goals_scored: '3',
    goals_conceded: '2',
    final_result: 'win',
    fixture_date: 2023-09-23T11:00:00.000Z
  },
  {
    opponent_team: 'Mallorca',
    goals_scored: '2',
    goals_conceded: '2',
    final_result: 'draw',
    fixture_date: 2023-09-26T14:00:00.000Z
  },
  {
    opponent_team: 'Sevilla',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-09-29T13:30:00.000Z
  },
  {
    opponent_team: 'Granada CF',
    goals_scored: '2',
    goals_conceded: '2',
    final_result: 'draw',
    fixture_date: 2023-10-08T13:30:00.000Z
  },
  {
    opponent_team: 'Athletic Club',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-10-22T13:30:00.000Z
  },
  {
    opponent_team: 'Real Madrid',
    goals_scored: '1',
    goals_conceded: '2',
    final_result: 'loss',
    fixture_date: 2023-10-28T08:45:00.000Z
  },
  {
    opponent_team: 'Real Sociedad',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-11-04T14:30:00.000Z
  },
  {
    opponent_team: 'Alaves',
    goals_scored: '2',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2023-11-12T09:45:00.000Z
  },
  {
    opponent_team: 'Rayo Vallecano',
    goals_scored: '1',
    goals_conceded: '1',
    final_result: 'draw',
    fixture_date: 2023-11-25T07:30:00.000Z
  },
  {
    opponent_team: 'Atletico Madrid',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2023-12-03T14:30:00.000Z
  },
  {
    opponent_team: 'Girona',
    goals_scored: '2',
    goals_conceded: '4',
    final_result: 'loss',
    fixture_date: 2023-12-10T14:30:00.000Z
  },
  {
    opponent_team: 'Valencia',
    goals_scored: '1',
    goals_conceded: '1',
    final_result: 'draw',
    fixture_date: 2023-12-16T14:30:00.000Z
  },
  {
    opponent_team: 'Almeria',
    goals_scored: '3',
    goals_conceded: '2',
    final_result: 'win',
    fixture_date: 2023-12-20T12:30:00.000Z
  },
  {
    opponent_team: 'Las Palmas',
    goals_scored: '2',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2024-01-04T15:00:00.000Z
  },
  {
    opponent_team: 'Real Betis',
    goals_scored: '4',
    goals_conceded: '2',
    final_result: 'win',
    fixture_date: 2024-01-21T12:00:00.000Z
  },
  {
    opponent_team: 'Villarreal',
    goals_scored: '3',
    goals_conceded: '5',
    final_result: 'loss',
    fixture_date: 2024-01-27T12:00:00.000Z
  },
  {
    opponent_team: 'Osasuna',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-01-31T12:30:00.000Z
  },
  {
    opponent_team: 'Alaves',
    goals_scored: '3',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2024-02-03T12:00:00.000Z
  },
  {
    opponent_team: 'Granada CF',
    goals_scored: '3',
    goals_conceded: '3',
    final_result: 'draw',
    fixture_date: 2024-02-11T14:30:00.000Z
  },
  {
    opponent_team: 'Celta Vigo',
    goals_scored: '2',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2024-02-17T12:00:00.000Z
  },
  {
    opponent_team: 'Getafe',
    goals_scored: '4',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-02-24T09:45:00.000Z
  },
  {
    opponent_team: 'Athletic Club',
    goals_scored: '0',
    goals_conceded: '0',
    final_result: 'draw',
    fixture_date: 2024-03-03T14:30:00.000Z
  },
  {
    opponent_team: 'Mallorca',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-03-08T14:30:00.000Z
  },
  {
    opponent_team: 'Atletico Madrid',
    goals_scored: '3',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-03-17T14:30:00.000Z
  },
  {
    opponent_team: 'Las Palmas',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-03-30T14:30:00.000Z
  },
  {
    opponent_team: 'Cadiz',
    goals_scored: '1',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-04-13T13:30:00.000Z
  },
  {
    opponent_team: 'Real Madrid',
    goals_scored: '2',
    goals_conceded: '3',
    final_result: 'loss',
    fixture_date: 2024-04-21T13:30:00.000Z
  },
  {
    opponent_team: 'Valencia',
    goals_scored: '4',
    goals_conceded: '2',
    final_result: 'win',
    fixture_date: 2024-04-29T13:30:00.000Z
  },
  {
    opponent_team: 'Girona',
    goals_scored: '2',
    goals_conceded: '4',
    final_result: 'loss',
    fixture_date: 2024-05-04T11:00:00.000Z
  },
  {
    opponent_team: 'Real Sociedad',
    goals_scored: '2',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-05-13T13:30:00.000Z
  },
  {
    opponent_team: 'Almeria',
    goals_scored: '2',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-05-16T14:00:00.000Z
  },
  {
    opponent_team: 'Rayo Vallecano',
    goals_scored: '3',
    goals_conceded: '0',
    final_result: 'win',
    fixture_date: 2024-05-19T11:30:00.000Z
  },
  {
    opponent_team: 'Sevilla',
    goals_scored: '2',
    goals_conceded: '1',
    final_result: 'win',
    fixture_date: 2024-05-26T13:30:00.000Z
  }
]


