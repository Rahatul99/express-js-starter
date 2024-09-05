const express = require("express");

const app = express();

//here we notice every method have a common path
// app.get("/about/mission", (req, res) => {
//   res.send("This is home page with get request");
// });
// app.post("/about/mission", (req, res) => {
//   res.send("This is home page with get request");
// });
// app.put("/about/mission", (req, res) => {
//   res.send("This is home page with get request");
// });
//instead of above we can do it easily like below

app
  .route("/about/mission")
  .get((req, res) => {
    res.send("Welcome to application home get");
  })
  .post((req, res) => {
    res.send("Welcome to application home post");
  })
  .put((req, res) => {
    res.send("Welcome to application home put");
  });

app.listen(5001, () => {
  console.log("listening on port 5000");
});
