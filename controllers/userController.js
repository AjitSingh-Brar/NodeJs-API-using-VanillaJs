const User = require("../model/userModels");

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (err) {
    console.log(err);
  }
}

async function getUser(req, res, id) {
  try {
    const user = await User.findByID(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
}

async function createUser(req, res) {
  try {
    const user = {
      title: "Test User",
      name: "Tester",
      username: "testy",
    };

    const newUser = await User.create(user);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
