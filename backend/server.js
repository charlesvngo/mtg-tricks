const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Successful response.");
  console.log("Server response");
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
