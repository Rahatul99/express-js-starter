const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res, next) => {
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
}); //in this case it not showing any error instead it hanging

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
