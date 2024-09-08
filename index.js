const express = require("express");
const handler = require("./handler");

//cookie parser
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data
// and use cookieParser
app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.path);
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", handler);
app.post("/user/", (req, res) => {
  console.log(req.route);
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
