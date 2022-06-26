const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

// Functions
const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4); //Generate a number
  const randomChosenColour = buttonColours[randomNumber]; // set color
  const userChosenColour = $(this).attr("id");
  playSong(userChosenColour);
  gamePattern.push(randomChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(gamePattern);
  console.log(userClickedPattern);
  return gamePattern;
};

const playSong = function (el) {
  const audio = new Audio(`./sounds/${el}.mp3`);
  return audio.play();
};

$(".btn").on("click", nextSequence);
