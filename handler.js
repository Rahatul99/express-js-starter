const handler = (req, res) => {
  console.log(req.app.get("view engine"));
  // console.log(req.cookies);
  res.send("Hello world");
};

module.exports = handler;
