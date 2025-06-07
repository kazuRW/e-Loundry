const express = require("express");
const session = require("express-session");
const multer = require("multer");
const upload = multer();
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
const usersRoutes = require("./routes/users");

// Gunakan route
app.use("/", authRoutes);
app.use("/", homeRoutes);
app.use("/", usersRoutes);

app.get("/create-table", async (req, res) => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `);

    res.send("Tabel 'users' berhasil dibuat atau sudah ada.");
  } catch (error) {
    console.error("Error membuat tabel:", error);
    res.status(500).send({ message: `Gagal membuat tabel: ${error.message}` });
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
