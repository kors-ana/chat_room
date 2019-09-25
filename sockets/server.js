const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 9090 });

let clients = [];

wss.on("connection", connection => {
  clients.push(connection);
  broadcast({ userName: "admin", message: "user has entered the room" });

  connection.on("message", message => {
    const data = JSON.parse(message);
    broadcast(data);
  });

  connection.on("close", () => {
    cleanUp();
  });
});

function broadcast(message) {
  const data = JSON.stringify(message);
  clients.forEach(client => {
    client.send(data);
  });
}

function cleanUp() {
  const clientsLeaving = clients.filter(client => client.readyState === 3);

  clients = clients.filter(client => client.readyState !== 3);
  clientsLeaving.forEach(client =>
    broadcast({ userName: "admin", message: "user has left the room" })
  );
}
