const mtg = require("mtgsdk");

// Code will print black lotus
// mtg.card.find(3).then((result) => {
//   console.log(result.card.name); // "Black Lotus"
// });

// The code above works but the code below doesn't. Next steps are to figure out why.
mtg.card
  .all({ type: "instant", colors: "red", set: "LCI" })
  .on("data", (card) => {
    console.log(card.name);
  });

// // This sample code does work and prints all instances of squee
// mtg.card.all({ name: "Squee", pageSize: 1 }).on("data", (card) => {
//   console.log(card.name);
// });
