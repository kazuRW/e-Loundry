const express = require("express");
const router = express.Router();

// Middleware autentikasi
function authMiddleware(req, res, next) {
  if (req.session && req.session.authenticated) {
    next();
  } else {
    res.status(401).send("Unauthorized. Please login first.");
  }
}

// Route /home dilindungi middleware authMiddleware
router.get("/home", authMiddleware, (req, res) => {
  res.send("Home - Protected Content");
});

module.exports = router;

