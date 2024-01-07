const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
