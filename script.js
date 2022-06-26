const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4); //Generate a number
  const randomChosenColour = buttonColours[randomNumber]; // set color

  $(`div#${randomChosenColour}`).css("background", "black");

  gamePattern.push(randomChosenColour);
  return gamePattern;
};

const randomNumber = nextSequence;
console.log(randomNumber());
