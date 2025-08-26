const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "hello world testing on EC2 with nginx as a reverse proxy",
  });
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
