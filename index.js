const express = require("express");

const app = express();

app.param("id", (req, res, next, id) => {
  console.log(id, "id");
  const user = {
    userId: id,
    name: "USA",
  };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("This is home page with get request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
