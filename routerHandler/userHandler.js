const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const User = new mongoose.model("User", userSchema); //model

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
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        // Generate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          "access-token": token,
          message: "Login successful",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});
//GET ALL USERS
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({
      status: "active",
    }).populate("todos");

    res.status(200).json({
      data: users,
      message: "Success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "There was an error on the server side",
    });
  }
});
module.exports = router;
