const express = require("express");
const handler = require("./handler");

const app = express();
app.use(express.json()); //before use this we got the req.body undefined.but after set this parser i got the real data
app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("hi");
    },
    "text/html": () => {
      res.render("pages/about", {
        name: "USA",
      });
    },
    "application/json": () => {
      res.json({
        message: "About",
      });
    },
    default: () => {
      res.status(406).send("Not acceptable");
    },
  });
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
