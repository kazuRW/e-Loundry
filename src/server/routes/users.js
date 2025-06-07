const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../models/Users");

router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    if (!allUsers || allUsers.length === 0) {
      return res.status(200).json({
        message: "Data kosong.",
      });
    }
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Terjadi gangguan atau koneksi internet terputus.",
    });
  }
});

module.exports = router;
