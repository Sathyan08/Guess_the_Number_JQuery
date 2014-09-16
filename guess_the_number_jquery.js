var max = 100
var guessCount = 0

function valid(userGuess,max){
  if(isNaN(userGuess) || userGuess < 0 || userGuess > max){
    return false;
    }
  else{
    return true;
    }
  }

function wrongGuess(userGuess,error){
  $("#feedback").text("Your guess of " + userGuess + " was too " + error + "! Guess again.");
}


var hiddenNumber = Math.floor((Math.random() * 101));

$(document).ready(function(){
  $("#max").text(max);
});

$(document).ready(function(){
  $("#gameBox").on("submit", function(event){
      event.preventDefault();
      var guess = parseInt($("#userInput").val());
      if(valid(guess,max)){
        if(guess > hiddenNumber){
          wrongGuess(guess,"high")
        }
        else if(guess < hiddenNumber){
           wrongGuess(guess,"low")
        }
        else{
          guessCount ++;
          $("#feedback").text("You guessed right! You made " + guessCount + " guesses. The hidden number was " + hiddenNumber + ". Click \"Play Again\" to restart");
          $("#restart").removeClass("hidden");
        };
      }
      else{
        $("#feedback").text("Your guess was invalid. Please guess a number from 0 to " + max + ".");
      };
      $("#feedback").removeClass("hidden");
      guessCount ++;
    });
});
