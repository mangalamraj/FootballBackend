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
