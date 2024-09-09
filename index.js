const express = require("express");
const handler = require("./handler");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data
app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  console.log(res.headersSent);
  res.render("pages/about", {
    name: "Bangladesh",
  });
  console.log(res.headersSent);
});

app.get("/user/:id", handler);
app.post("/user/", (req, res) => {
  console.log(req.route);
  res.send("Hello world");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
