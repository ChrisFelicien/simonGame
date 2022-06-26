const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

// Functions
const nextSequence = function () {
  addClass(this, "pressed");
  removeClass(this, "pressed");
  const randomNumber = Math.floor(Math.random() * 4); //Generate a number
  const randomChosenColour = buttonColours[randomNumber]; // set color
  const userChosenColour = $(this).attr("id");
  playSong(userChosenColour);
  gamePattern.push(randomChosenColour);
  userClickedPattern.push(userChosenColour);
  return gamePattern;
};

const playSong = function (name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  return audio.play();
};

const addClass = function (el, className) {
  return $(el).addClass(className);
};
const removeClass = function (el, className) {
  return setTimeout(() => {
    return $(el).removeClass(className);
  }, 100);
};
const startGame = function () {
  $(".btn").on("click", nextSequence);
  $("#level-title").text("Click on the button");
};

$(document).on("keypress", (e) => {
  e.key.toLowerCase() != "a" ? "" : startGame();
});
