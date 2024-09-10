const express = require("express");
// const adminRouter = require("./adminRouter");

const publicRouter = express.Router();

publicRouter.uae((req, res, next) => {
  console.log("Loading");
  next();
});

// publicRouter.uee(adminRouter);

module.exports = publicRouter;
