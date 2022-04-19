
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
    connection.on('Move: up', () => {
      connection.write('Move: up');
    });
  }
  
  if (key === 'a') {
    connection.on("Move: left'", () => {
      connection.write("Move: left");
    });
  }

  if (key === 's') {
    connection.on('Move: down', () => {
      connection.write('Move: down');
    });
  }

  if (key === 'd') {
    connection.on('Move: right', () => {
      connection.write('Move: right');
    });
  }
  
};


module.exports = {
  setupInput
};