
// setup interface to handle user input from stdin

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }
  
  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === 'h') {
    connection.write('Say: Hello');
  }

  if (key === 'b') {
    connection.write('Say: Goodbye');
  }

  if (key === 'i') {
    connection.write('Say: I win!');
  }

  if (key === 'u') {
    connection.write('Say: How are you!');
  }

  if (key === 'o') {
    connection.write('Say: I am ok!');
  }

  if (key === '1') {
    connection.write('Say: 100%!!!!');
  }

  if (key === '?') {
    connection.write('Say: WHAT???');
  }
  
};


module.exports = {
  setupInput
};