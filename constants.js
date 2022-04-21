const IP = 'localhost';
const PORT = 50541;

const EXIT_KEY = '\u0003';
const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGHT_KEY = "d";
const EXIT = () => process.exit();
const UP = "Move: up";
const LEFT = "Move: left";
const DOWN = "Move: down";
const RIGHT = "Move: right";

const MESSAGES = {
  h: "Hello..",
  g: "Goodbye",
  i: "I win!",
  u: "How are you?",
  o: "I am ok!",
  1: "100%!!!!",
  "?": "WHAT???",
  "*": "hssssss..."
};


module.exports = {
  IP,
  PORT,
  EXIT_KEY,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  EXIT,
  UP,
  LEFT,
  DOWN,
  RIGHT,
  MESSAGES
};