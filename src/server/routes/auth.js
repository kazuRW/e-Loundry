module.exports = (upload) => {
  const express = require("express");
  const router = express.Router();

  router.post("/login", upload.none(), (req, res) => {
    const { username, password } = req.body;

    if (req.session.authenticated) {
      return res.status(400).send("You are already logged in");
    }

    if (!username || !password) {
      return res.status(400).send("Username and password are required");
    }

    if (username === "admin" && password === "1234") {
      req.session.authenticated = true;
      return res.send("Login successful!");
    } else {
      return res.status(401).send("Invalid credentials");
    }
  });

  router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(500).send("Logout error");
      res.send("Logged out");
    });
  });

  return router;
};
