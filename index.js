const express = require("express");

const app = express();

//to access the public folder as static root folder then we have express.static
app.use(
  express.static(`${__dirname}/public/`, {
    index: "home.html",
  })
);
//now if we hit the url (http://localhost:5001/text) then we can see the result hello world(or what text have in the txt file)

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  res.send("This is home page with post request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
