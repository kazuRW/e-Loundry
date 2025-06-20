const express = require("express");
const session = require("express-session");
const multer = require("multer");
const upload = multer();
const createTableDiscount = require("./database/migrations/create_table_discount");
const createTableUsers = require("./database/migrations/create_table_users");
const { db, users } = require("./database/db");

require("dotenv").config(); // load .env
const config = require("../../config/default");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session middleware
app.use(
  session({
    secret: "de_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Import routes
const authRoutes = require("./routes/auth")(upload);
const homeRoutes = require("./routes/home");
const isDevelopment = require("./middleware/isDevelopment");
const usersRoutes = require("./routes/users")(upload);

// Gunakan route
app.use("/", authRoutes);
app.use("/", homeRoutes);
app.use("/", usersRoutes);

app.get("/create-table", isDevelopment, async (req, res) => {
  try {
    await Promise.all([createTableDiscount(), createTableUsers()]);
    res.send("Tabel 'users' berhasil dibuat atau sudah ada.");
  } catch (error) {
    console.error("Error membuat tabel:", error);
    res.status(500).send({ message: `Gagal membuat tabel: ${error.message}` });
  }
});

app.get("/migrate", isDevelopment, async (req, res) => {
  try {
    await Promise.all([createTableDiscount(), createTableUsers()]);
    res.send({ message: "Success run migration" }).status(200);
  } catch (error) {
    console.error("Gagal menjalankan migration:", error.message);
    res
      .status(500)
      .send({ message: `Gagal menjalankan migration: ${error.message}` });
  }
});

app.get("/drop-table-users", async (req, res) => {
  try {
    await db.execute(`
      DROP TABLE users
    `);

    res.send("Tabel 'users' berhasil dihapus.");
  } catch (error) {
    console.error("Error menghapus tabel:", error);
    res
      .status(500)
      .send({ message: `Gagal menghapus tabel: ${error.message}` });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);

  console.log("DB Host:", process.env.DB_HOST || config.Settings.dbConfig.host);
  console.log(
    "DB Database:",
    process.env.DB_DATABASE || config.Settings.dbConfig.database,
    "DB Port:",
    process.env.DB_PORT || config.Settings.dbConfig.port
  );
  console.log(process.env.NODE_ENV);
});
