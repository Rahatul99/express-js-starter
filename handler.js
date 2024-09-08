const handler = (req, res) => {
  // console.log(req.accepts("json")); //**json** in header if we sat accepts application/json
  // console.log(req.accepts("html")); //**false** in header if we sat accepts application/json

  console.log(req.get("accept"));
  res.send("Hello world");
};

module.exports = handler;
