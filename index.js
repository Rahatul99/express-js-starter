const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  for (let i = 0; i <= 10; i++) {
    // res.write("a");
    if (i === 5) {
      next("There was an error");
    } else {
      res.write("a");
    }
  }
  res.end();
});

//for the wrong route error handling
app.use((req, res, next) => {
  next("Requested url was not found");
});

//noted it will be the custom error handling middleware. it should be last middleware function of the code
app.use((req, res, next) => {
  // next("Requested url not found");
  if (res.headersSent) {
    next("There was an problem");
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
