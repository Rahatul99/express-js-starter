const express = require("express");

const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
const adminRouter = express.Router();

// const myMiddleware = (req, res, next) => {
//   console.log(
//     `${new Date(Date.now()).toLocaleDateString()} - ${req.method} -${
//       req.originalUrl
//     } - ${req.protocol} - ${req.ip}}`
//   );
//   next();
// };

// now if we have to sent or receive any data in middleware then we can do like below
const myMiddlewareWrapper = (options) => {
  return (req, res, next) => {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleDateString()} - ${req.method} -${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}}`
      );
      next();
    } else {
      throw new Error("Failed to log");
    }
  };
};
// adminRouter.use(myMiddleware);
adminRouter.use(myMiddlewareWrapper({ log: true }));

//------------
adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("There was a server side error");
};

adminRouter.use(errorMiddleware);

app.listen(5001, () => {
  console.log("listening on port 5001");
});
