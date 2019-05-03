var libButton = document.getElementById('lib-button');
var createIt = function(){
  var storyDiv = document.getElementById("story");
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var color = document.getElementById("color").value;
  var food = document.getElementById("food").value;
  var restaurant = document.getElementById("restaurant").value;
  var number = document.getElementById("number").value;
  var activity = document.getElementById("activity").value;
  var celebrity = document.getElementById("celebrity").value;

      storyDiv.innerHTML= "On one stormy day as I walked to my " + noun + ", I saw a strange creature ahead." + " It had a " + adjective + " face that made me sick to my stomach." + " Soon enough, I figured out that the person I was looking at was " + celebrity + ". I began to walk closer and realized a " + color + " worm was crawling on the ground next to the " + food + " I had from " + restaurant+ " for lunch." + "To add on the craziness of today, I forgot to do my " + number + " essays due for my english class and I'm faiing."+ "Welp, I guess I won't be there for " + activity + " today." };

      libButton.addEventListener('click', createIt);
