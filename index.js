const express = require("express");

const app = express();

const myMiddleware = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleDateString()} - ${req.method} -${
      req.originalUrl
    } - ${req.protocol} - ${req.ip}}`
  );
  next(); //if we didn't call the next then it stuck on this function.
};

app.use(myMiddleware);

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
