const express = require("express");

const app = express();

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.originalUrl, "admin"); //result: /admin/dashboard
  console.log(req.url); //result: /dashboard
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.originalUrl, "app"); //result: /user/1
  console.log(req.url); //result: /user/1
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
