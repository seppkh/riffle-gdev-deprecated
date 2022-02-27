import Cards from "./interface";

// create list of available numbers:
var numbersArr: Array<number> = Array.from(Array(50).keys());

// create as set of 4 cards for the gameplay:
var cardsSet: Cards = {
  mainCard: {
    elements: []
  },
  card1: {
    elements: [],
    isMatch: false
  },
  card2: {
    elements: [],
    isMatch: false
  },
  card3: {
    elements: [],
    isMatch: false
  }
};

// creates a new array of n random numbers from a given list of numbers
function getRandom(arr: Array<number>, n: number) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// creates a new array with y matching numbers with mainCard and n random numbers are not in mainCard
function includeSomeThenGetRandom(numbersArr: Array<number>, n: number, mainArr: Array<number>, y: number) {
  if (y > n)
      throw new RangeError("includeSomeThenGetRandom: more elements being matched than in main array");
  var result = new Array(n);
  var matchingElements = mainArr.slice(0,y);
  var noMatchingElements = new Array(n - y);

  var numbersArrWithoutMainArr = numbersArr.filter(x => !mainArr.includes(x));

  noMatchingElements = getRandom(numbersArrWithoutMainArr, n-y);

  // add matching elements and not matching elements together into one array
  result = matchingElements.concat(noMatchingElements);

  return result;
};

// function to get a random number to decrease matching elements on incorrect cards
function getRandomInt(max: number) {
  var min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// create and save values for each card :
function createCards(numberOfElements: number, maxMatching: number) {
  var mainCard = getRandom(numbersArr, numberOfElements);
  var card1 = includeSomeThenGetRandom(numbersArr, numberOfElements, mainCard, maxMatching);
  var card2 = includeSomeThenGetRandom(numbersArr, numberOfElements, mainCard, maxMatching - getRandomInt(maxMatching));
  var card3 = includeSomeThenGetRandom(numbersArr, numberOfElements, mainCard, maxMatching - getRandomInt(maxMatching));

  cardsSet = {
    mainCard: {
      elements: mainCard
    },
    card1: {
      elements: card1,
      isMatch: true
    },
    card2: {
      elements: card2,
      isMatch: false
    },
    card3: {
      elements: card3,
      isMatch: false
    },
  };
  
  return cardsSet;
};

export default createCards;