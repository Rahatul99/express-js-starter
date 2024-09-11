const express = require("express");
const app = express();
const multer = require("multer");

//file upload
const UPLOADS_FOLDER = "./uploads/";

//prefer the final multer upload object
const upload = multer({
  dest: UPLOADS_FOLDER,
});

app.post("/", upload.array("avatar", 3), (req, res) => {
  res.send("hello");
});

app.listen(5001, () => {
  console.log("listing on port 5001");
});
