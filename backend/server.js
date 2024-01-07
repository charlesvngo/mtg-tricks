const express = require("express");
const mtg = require("mtgsdk");

const app = express();

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.use((req, res, next) => {
  mtg.card
    .all({ types: "instant", colors: "red,white", set: "LCI" })
    .on("data", function (card) {
      console.log(card.name);
    });
  next();
});

app.get("/card", (req, res) => {
  res.send(
    mtg.card
      .all({ types: "instant", colors: "red,white", set: "LCI" })
      .on("data", function (card) {
        console.log(card.name);
      })
  );
});
app.listen(3000, () => console.log("Example app is listening on port 3000."));
