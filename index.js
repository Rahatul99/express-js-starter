const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerHandler/toDoHandler");
const userSchema = require("./schemas/userSchema");

//express app initialization
const app = express();
app.use(express.json());

//database app connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

//application routes
app.use("/todo", todoHandler);
app.use("/user", userSchema);

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.listen(5001, () => {
  console.log("listing on port 5001");
});
