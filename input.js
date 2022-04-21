
// setup interface to handle user input from stdin

const { EXIT_KEY, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, EXIT, UP,
  LEFT, DOWN, RIGHT, MESSAGES } = require('./constants');

let connection;
let lastCommand = false;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

  setInterval(() => {
    if (lastCommand) connection.write(lastCommand);
  }, 300);

  return stdin;
};

const handleUserInput = function(key) {
  const messages = MESSAGES;

  if (key === EXIT_KEY) {
    EXIT();
  }

  if (key === MOVE_UP_KEY) {
    lastCommand = UP;
  }
  
  if (key === MOVE_LEFT_KEY) {
    lastCommand = LEFT;
  }

  if (key === MOVE_DOWN_KEY) {
    lastCommand = DOWN;
  }

  if (key === MOVE_RIGHT_KEY) {
    lastCommand = RIGHT;
  }

  if (key in messages) {
    connection.write("Say: " + messages[key]);
  }
};


module.exports = {
  setupInput
};