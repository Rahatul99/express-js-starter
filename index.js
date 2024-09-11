const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res, next) => {
  setTimeout(() => {
    try {
      console.log(a);
    } catch (err) {
      next(err);
    }
  }, 100);
});

app.use((req, res, next) => {
  console.log("I am not called");
  next();
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("There was a problem");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send("There was an error");
    }
  }
});

app.listen(5001, () => {
  console.log("listing on port 5001");
});
