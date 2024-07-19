const fs = require("fs");
const path = require("path");
const pool = require("./src/db/db");

const createTables = fs
  .readFileSync(path.join(__dirname, "src/db/createTables.sql"))
  .toString();

pool
  .query(createTables)
  .then(() => {
    console.log("Tables created successfully");
    pool.end();
  })
  .catch((err) => {
    console.error("Error creating tables", err);
    pool.end();
  });
