const express = require("express");
const adminRouter = require("./adminRouter");
const publicRouter = require("./publicRouter");

const app = express();

app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(5001, () => {
  console.log("listing on port 5001");
});
