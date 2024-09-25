const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const User = new mongoose.model("Todo", userSchema); //model

//SIGNUP
router.get("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      userName: req.body.username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "Signup successfully",
    });
  } catch {
    res.status(500).json({
      message: "Signup failed",
    });
  }
});

//LOGIN
router.get("/login", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  if (user && user.length > 0) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (isValidPassword) {
    } else {
      res.status(401).join({
        error: "Authentication failed",
      });
    }
  }
});

module.exports = router;
