const express = require("express");

const publicRouter = express.Router();

// const log = (req, res, next) => {
//   console.log("I am logged in");
//   next();
// };

// publicRouter.all("*", log);

publicRouter.param((param, option) => (req, res, next, val) => {
  if (val === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.param("user", "12");

publicRouter.get("/:user", (req, res) => {
  res.send(`Hello admin`);
});

publicRouter.get("/login", (req, res) => {
  res.send("login");
});

module.exports = publicRouter;
