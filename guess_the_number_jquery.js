var max = 100

var hiddenNumber = 85

// function valid?(guess){
//   if(guess < 0 || guess > 100){
//     return true;
//     }
//   else{
//     return false;
//     }
//   }
// }

// var hiddenNumber = Math.floor((Math.random() * 101));

$(document).ready(function(){
  $("#max").text(max);
});

$(document).ready(function(){
  $("#gameBox").on("submit", function(event){
      event.preventDefault();
      var guess = parseInt($("#userInput").val());

      // while(guess < 0 || guess > 100){
      //   if(guess < 0){
      //     $("#feedback").text("Your guess was less than 0.  Please only guess values from 0 to " + max + ".")
      //   }
      //   else{
      //     $("#feedback").text("Your guess was greater than 100.  Please only guess values from 0 to " + max + ".")
      //   };
      //   $("#feedback").removeClass("hidden");
      // };
      if(guess > hiddenNumber){
        $("#feedback").text("Your guess of " + guess + " was too high! Guess again")
      }
      else{
        $("#feedback").text("Your guess of " + guess + " was too low! Guess again")
      };
        $("#feedback").removeClass("hidden");

      alert("The square of " + guess + " is " + (guess * guess));
    });
});
