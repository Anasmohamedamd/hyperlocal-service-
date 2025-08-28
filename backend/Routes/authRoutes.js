const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../Model/User');  // <-- You forgot this import
const { register, login } = require('../Controller/authController');
const authMiddleware = require("../MiddleWare/authMiddleWare"); // <-- no destructuring

// Register
router.post('/register', register);

// Login
router.post('/login', login);


// Protected profile route
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
