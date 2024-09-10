const express = require("express");

const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am logged in");
  next();
};

publicRouter.all("*", log);

publicRouter.get("/:user", (req, res) => {
  res.send(`"Dashboard"`);
});

publicRouter.get("/login", (req, res) => {
  res.send("login");
});

module.exports = publicRouter;
