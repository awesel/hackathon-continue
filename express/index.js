// export const answer = "";
// export const realPhrase = "";

function daysBetween(date1, date2) {
    // Calculate the difference in milliseconds between the two dates
    var differenceInMilliseconds = date2 - date1;
  
    // Convert the difference to days
    var days = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
  
    return days;
  }
  
var currentDate = new Date();
var januaryFirst = new Date(2023, 0, 1);  // 0 = January, 1 = February, etc.

var daysUntilJanuaryFirst = daysBetween(currentDate, januaryFirst);

var dayN = daysUntilJanuaryFirst*-1;

const dayNumber = document.getElementById('dayNumber');

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          allText = rawFile.responseText;
        }
      }
    };
    rawFile.send(null);
    return allText;
  }
  
var text = ''

text = readTextFile('words/phrases.txt')

var lines = text.split('\n');

realPhrase = lines[dayN-1];


function getFirstWord(str) {
    // Initialize a variable to store the first word
    var firstWord = "";
    
    // Iterate through the characters in the string
    for (var i = 0; i < str.length; i++) {
      // If the current character is not a space, add it to the first word
      if (str[i] !== " ") {
        firstWord += str[i];
      }
      // If the current character is a space, return the first word
      else {
        return firstWord;
      }
    }
    
    // If the loop completes, return the first word
    return firstWord;
  }
  

  function getSecondWord(str) {
    // Initialize a variable to store the second word
    var secondWord = "";
    
    // Initialize a variable to keep track of whether the current character is part of the second word
    var secondWordStarted = false;
    
    // Iterate through the characters in the string
    for (var i = 0; i < str.length; i++) {
      // If the current character is not a space and the second word has not yet started, skip it
      if (str[i] !== " " && !secondWordStarted) {
        continue;
      }
      // If the current character is a space and the second word has not yet started, start the second word
      if (str[i] === " " && !secondWordStarted) {
        secondWordStarted = true;
        continue;
      }
      // If the current character is not a space and the second word has started, add it to the second word
      if (str[i] !== " " && secondWordStarted) {
        secondWord += str[i];
      }
      // If the current character is a space and the second word has started, return the second word
      if (str[i] === " " && secondWordStarted) {

        return secondWord;
      }
    }
    
    // If the loop completes, return the second word
    return secondWord;
  }
  
      

image = document.getElementById('test');

john = realPhrase

image.src = "images/" + getFirstWord(realPhrase) + "_" + getSecondWord(realPhrase) + ".png";


  
function findString(largeString, smallString, startIndex) {
    // Iterate through the large string, starting from the start index
    for (let i = startIndex; i < largeString.length; i++) {
      // If the character at the current position in the large string matches the first character of the small string,
      // we'll start checking for a match
      if (largeString[i] === smallString[0]) {
        let match = true;
        // Iterate through the small string to see if it matches the substring of the large string starting at the current position
        for (let j = 0; j < smallString.length; j++) {
          if (smallString[j] !== largeString[i + j]) {
            match = false;
            break;
          }
        }
        // If we found a match, return the index
        if (match) return i;
      }
    }
    // If we reach here, it means we didn't find a match. Return -1 to indicate this.
    return -1;
  }

  
// Returns an Axios promise with the results.
// In case of success, results are contained in `response.data`. 
// In case of failure, you can retrieve the status code in `err.response.status` 
// and the error message in `err.response.data.detail`.




var textbox = document.getElementById('textbox');
var submitter = document.getElementById('submitter');
var score = document.getElementById('score');
var prompt = document.getElementById('prompt');

submitter.addEventListener('click', function() {
  answer = textbox.value;
  textbox.value = '';
  prompt.textContent = realPhrase;



//   const postData = {
//     answeer: answer,
//     realPhrasee: realPhrase
//   };
  
//   fetch('/localhost:8000', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//   //send answer and realPhrase to backend, get score, set textbx
//   //score.textContent = response.data * 100

//   score.textContent = response.score;
 });
  

