require("dotenv").config();
const mysql = require("mysql2/promise");
const { drizzle } = require("drizzle-orm/mysql2");
const { users } = require("./schema/users");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = drizzle(pool);

async function testDbConnection() {
  try {
    await db.execute("SELECT 1");
    console.log("Database connection success");
  } catch (error) {
    console.error("Error database connection:", error);
  }
}

testDbConnection();
module.exports = { db, users };
