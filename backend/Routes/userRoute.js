const express = require('express');
const { authMiddleware } = require("../MiddleWare/authMiddleWare");


const router = express.Router();

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    res.json({ msg: "Welcome to your profile", user: req.user });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
