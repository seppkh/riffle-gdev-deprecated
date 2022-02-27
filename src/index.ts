import createCards from "./cards/createCards";

// set number of elements on each card
var numberOfElements = 6;
// set number of matching elements on the correct card
var maxMatchingElements = 3;


// create 4 cards, parameters are number of elements on each card, max matching elements of correct card
var cards = createCards(numberOfElements, maxMatchingElements);

console.log("matching elements:", maxMatchingElements);
console.log("mainCard:", cards.mainCard);
console.log("card1:", cards.card1);
console.log("card2:", cards.card2);
console.log("card3:", cards.card3);