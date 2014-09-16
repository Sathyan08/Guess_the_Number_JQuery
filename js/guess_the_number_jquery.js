$("#gamebox").on("submit", function(event){
    event.preventDefault();
    var number = parseInt($("#userInput").value());
    alert("The square of " + number + " is " + (number * number))
  });
