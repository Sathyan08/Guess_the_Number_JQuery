var max = 100

var hiddenNumber = 85

function valid(userGuess,max){
  if(isNaN(userGuess) || userGuess < 0 || userGuess > max){
    return false;
    }
  else{
    return true;
    }
  }


// var hiddenNumber = Math.floor((Math.random() * 101));

$(document).ready(function(){
  $("#max").text(max);
});

$(document).ready(function(){
  $("#gameBox").on("submit", function(event){
      event.preventDefault();
      var guess = parseInt($("#userInput").val());
      debugger
      if(valid(guess,max)){
        if(guess > hiddenNumber){
          $("#feedback").text("Your guess of " + guess + " was too high! Guess again")
        }
        else if(guess < hiddenNumber){
          $("#feedback").text("Your guess of " + guess + " was too low! Guess again.")
          $("#feedback").removeClass("hidden")

        }
        else{

          $("#feedback").text("You guessed right! The hidden number was " + hiddenNumber + ". Click \"Play Again\" to restart");
          $("#restart").removeClass("hidden");
        }
        ;

      }
      else{
        $("#feedback").text("Your guess was invalid. Please guess a number from 0 to " + max + ".");
      };



    });
});
