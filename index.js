const express = require("express");

const app = express();

const router = express.Router({
  caseSensitive: true, //if we want to make it case sensitive then
}); //it is return a router object
app.use(router); //and i tell me to my app to use this router

//then it also works if we replace the get into router
router.get("/about", (req, res) => {
  res.send("This is home page");
});

router.post("/", (req, res) => {
  res.send("This is home page with post request");
});

app.listen(5001, () => {
  console.log("listening on port 5000");
});
