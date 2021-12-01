const net = require('net');

const connect = function() {

  const conn = net.createConnection({

    host: "165.227.47.243",
    port: "50541"

  });
  conn.setEncoding("utf8");

  conn.on('connect', () => {

    console.log("uwu you connected");

    conn.write("Name: UwU");

  });
  conn.on("data", (data) => {

    console.log(data);

  });

  return conn;
};

module.exports = {
  connect
};

const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput());

  return stdin;

};
const handleUserInput = function(data) {

  if (data === '\u0003') {
    process.exit();
  }

};