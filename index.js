const express = require("express");
const handler = require("./handler");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data
app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  // res.location("/test");
  // res.redirect("/test");
  res.set("Platform", "Learn with sumit");
  console.log(res.get("Platform"));
  res.end();
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
