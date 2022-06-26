const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;

// Functions
const nextSequence = function () {
  $("#level-title").text(`Level ${level}`);
  addClass(this, "pressed");
  removeClass(this, "pressed");
  const randomNumber = Math.floor(Math.random() * 4); //Generate a number
  const randomChosenColour = buttonColours[randomNumber]; // set color
  const userChosenColour = $(this).attr("id");
  playSong(userChosenColour);
  gamePattern.push(randomChosenColour);
  userClickedPattern.push(userChosenColour);
  level++;
  return upDateScore($("#level-title"), level);
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
const upDateLevel = function (tag, score) {
  return $(tag).html(`Level ${score}`);
};
const upDateScore = function (tag, score) {
  return $(tag).html(`Level ${score}`);
};
const startGame = function () {
  upDateLevel($("#level-title"), level);
  $(".btn").on("click", nextSequence);
};
$(document).on("keypress", (e) => {
  e.key.toLowerCase() != "a" ? "" : startGame();
});
