// start hangman game! 

alert('Press any key to get started!');


// list of different cities in Texas for hangman game.

var cities = ['dallas', 'austin', 'arlington', 'houston','addison', 'plano', 'burleson', 'mansfield', 'grapevine', 'garland', 'allen']

// using above array we choose a random word.
var cityType = cities[Math.floor(Math.random() * cities.length)];
console.log(cityType);

// global variables 

var s;
var count = 0;
var answerArray = [];


// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array

function startUp() {
  for (var i = 0; i < cityType.length; i++) {
    answerArray[i] = "_";
  }

  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}



// this is the experimental area
document.onkeyup = function(event){
  var letter = event.key;
  
  if (letter.length > 0) {
    for (var i = 0; i < cityType.length; i ++) {
      if (cityType[i] === letter) {
        answerArray[i] = letter;
      }
    }
    
    count++;
    document.getElementById("counter").innerHTML = "No of guesses: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById("guesses").innerHTML = "You have guessed: " + letter;
  }
  if(count>15) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
  }
};
