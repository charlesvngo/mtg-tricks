import Scry = require('scryfall-sdk')

const card = await Scry.Cards.random();
console.log(card.name)