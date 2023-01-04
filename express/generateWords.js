// Read in the adjectives and nouns from the text files
const adjectivesPromise = fetch('words/adjectives.txt').then(response => response.text());
const nounsPromise = fetch('words/nouns.txt').then(response => response.text());



phrases = [];


Promise.all([adjectivesPromise, nounsPromise]).then(([adjectivesText, nounsText]) => {
  // Split the text by newline characters to create arrays of adjectives and nouns
  const adjectives = adjectivesText.split('\n');
  const nouns = nounsText.split('\n');

  // Create an array to store the combinations
  const combinations = [];

  // Loop until we have generated 500 combinations
  while (combinations.length < 500) {
    // Choose a random adjective and noun
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    // If the combination has not been used yet, add it to the array
    if (!combinations.includes(`${adjective} ${noun}`)) {
      combinations.push(`${adjective} ${noun}`);
    }
  }

  phrases = phrases.concat(combinations);
  // Print out the combinations
  
});

const button = document.getElementById('button');

chosenNumbers = [];

realPhrase = "Nothing generated yet";

// Define a function to choose and display a random combination
function choosePhrase() {
  // Choose a random combination from the array
  const choice = getRandomNumber(chosenNumbers);

  chosenNumbers.push(choice);

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];



  // Update the text of the combination element
  button.textContent = phrase;
  realPhrase = phrase;
}

function getRandomNumber(arr) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * phrases.length); // generates a random number between 0 and 99
  } while (arr.includes(randomNumber));
  return randomNumber;
}


// Choose a new combination when the button is clicked
button.addEventListener('click', choosePhrase);

var textbox = document.getElementById('textbox');
var submitter = document.getElementById('submitter');
var score = document.getElementById('score');
var prompt = document.getElementById('prompt');

submitter.addEventListener('click', function() {
  var answer = textbox.value;
  textbox.value = '';
  prompt.textContent = realPhrase;
  
    score.textContent = 20 * 100
  })


