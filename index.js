const express = require("express");

//cookie parser
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data

app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.path);
  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.cookies);
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
