const net = require('net');

const connect = function() {

  const conn = net.createConnection({

    host: "165.227.47.243",
    port: "50541"

  });
  conn.setEncoding("utf8");

  conn.on('connect', () => {

    console.log("uwu you connected");

  });
  conn.on("data", (data) => {

    console.log(data);

  } )

  return conn;
};

console.log("Connecting ...");

connect();