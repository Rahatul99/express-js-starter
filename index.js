const express = require("express");

const app = express();
const admin = express();

admin.on("mount", (parent) => {
  console.log("Admin Mounted");
  console.log(parent); // refers to the parent app
});

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("Welcome to the admin dashboard");
});

app.get("/", (req, res) => {
  res.send("This is home page with get request");
});

app.use("/admin", admin);

app.listen(5001, () => {
  console.log("listening on port 5000");
});
