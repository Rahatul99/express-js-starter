const express = require("express");

const app = express();

const adminRouter = express.Router();

const myMiddleware = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleDateString()} - ${req.method} -${
      req.originalUrl
    } - ${req.protocol} - ${req.ip}}`
  );
  // next(); //if we didn't call the next then it stuck on this function.   NB: if we give any value on the the next() it seems like an error, so if we want to return success then it should to have empty

  //now if instead of next we sat res.end it works fine for the middleware but the other route will be avoided
  // res.end();
};

adminRouter.use(myMiddleware);
adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
