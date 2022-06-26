const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

// Functions
const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4); //Generate a number
  const randomChosenColour = buttonColours[randomNumber]; // set color
  const soundId = $(this).attr("id");
  playSong(soundId);
  gamePattern.push(randomChosenColour);
  return gamePattern;
};

const playSong = function (el) {
  const audio = new Audio(`./sounds/${el}.mp3`);
  return audio.play();
};

$(".btn").on("click", nextSequence);
