const express = require("express");

const app = express();

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl, "hello"); //result: /admin cause it is on admin
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.baseUrl, "hello"); //result: empty currently its on root
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
