const mtg = require("mtgsdk");

mtg.card.find(3).then((result) => {
  console.log(result.card.name); // "Black Lotus"
});

// The code above works but the code below doesn't. Next steps are to figure out why.
mtg.card
  .all({ types: "instant", colors: "red,white", set: "LCI" })
  .on("data", function (card) {
    console.log(card.name);
  });
