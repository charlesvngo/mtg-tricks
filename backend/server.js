const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Successful response.");
  console.log("Server response");
});

app.listen(PORT, () =>
  console.log(`Example app is listening on port ${PORT}.`)
);
