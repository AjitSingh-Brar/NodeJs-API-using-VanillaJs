const http = require("http");
const users = require("./data/users.json");

console.log("DATA BEFORE STRINGIFY", users);

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
});

server.listen(port, hostname, () => {
  console.log("Listening on port", port);
});
