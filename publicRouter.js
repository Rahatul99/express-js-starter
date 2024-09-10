const express = require("express");

const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am logged in");
  next();
};

publicRouter.all("*", log);

publicRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  console.log("Hello world");
  next();
});

publicRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
});

publicRouter.get("/login", (req, res) => {
  res.send("login");
});

module.exports = publicRouter;
