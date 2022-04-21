
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
  }, 500);

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



// const handleUserInput = function(key) {
//   if (key === '\u0003') {
//     process.exit();
//   }

//   if (key === 'w') {
//     lastCommand = 'Move: up';
//   }
  
//   if (key === 'a') {
//     lastCommand = "Move: left";
//   }

//   if (key === 's') {
//     lastCommand = 'Move: down';
//   }

//   if (key === 'd') {
//     lastCommand = 'Move: right';
//   }

//   if (key === 'h') {
//     connection.write('Say: Hello');
//   }

//   if (key === 'b') {
//     connection.write('Say: Goodbye');
//   }

//   if (key === 'i') {
//     connection.write('Say: I win!');
//   }

//   if (key === 'u') {
//     connection.write('Say: How are you!');
//   }

//   if (key === 'o') {
//     connection.write('Say: I am ok!');
//   }

//   if (key === '1') {
//     connection.write('Say: 100%!!!!');
//   }

//   if (key === '?') {
//     connection.write('Say: WHAT???');
//   }
// };

module.exports = {
  setupInput
};