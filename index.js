const express = require("express");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this i got the real data

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.path);
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.path);
  console.log(req.body);
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
