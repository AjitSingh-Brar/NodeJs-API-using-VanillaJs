const http = require("http");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/userController");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  if (req.url === "/api/users" && req.method === "GET") {
    //getUsers
    getUsers(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    //getUser(req, res, id);
    let id = req.url.split("/")[3];
    getUser(req, res, id);
  } else if (req.url === "/api/users" && req.method === "POST") {
    createUser(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "PUT") {
    let id = req.url.split("/")[3];
    updateUser(req, res, id);
  } else if (
    req.url.match(/\/api\/users\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    let id = req.url.split("/")[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Route not found"));
  }
});

server.listen(port, hostname, () => {
  console.log("Listening on port", port);
});
