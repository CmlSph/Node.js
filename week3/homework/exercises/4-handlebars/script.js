/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
const Handlebars = require("handlebars");

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  const random = Math.floor(Math.random(array) * array.length);
  return array[random];
}

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];

const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];

const randomSubject = getRandomElement(subjects);
const randomPunchline = getRandomElement(punchlines);

function drawCard(subject, punchline) {
  // YOUR CODE GOES IN HERE
  return `${subject} is great to ${punchline}`;
}

const card = drawCard(randomSubject, randomPunchline);

const template = Handlebars.compile("{{card}}");

console.log(template({ card }));
