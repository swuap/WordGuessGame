
alert('Press any key to get started!');


// these are the cities that will be guessed

var cities = ['dallas', 'austin', 'arlington', 'houston','addison', 'plano', 'burleson', 'mansfield', 'grapevine', 'garland', 'allen']

// this chooses a word from the cities variable at random
var cityType = cities[Math.floor(Math.random() * cities.length)];
console.log(cityType);

// global variables 

var s;
var count = 15;
var answerArray = [];
var score = 0

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
    
    // trying to do a score tracker here
    if (answerArray === cityType) {
      score++;
    }

    console.log(answerArray);
  

    count--;
    document.getElementById("counter").innerHTML = "No of guesses remaining: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    $("#guesses").append(letter + ", ");
    document.getElementById("wins").innerHTML = "Number of wins: " + score;
  }
  if(count>15) {
    document.getElementById("stat").innerHTML = "You've had too many guesses!";
  }
};



