require("dotenv").config(); // load .env

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect();
connection.query("SELECT 1", (err, results) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connection is OK");
  }
});
module.exports = connection;
