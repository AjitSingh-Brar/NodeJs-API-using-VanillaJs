const User = require("../model/userModels");
const { getPostData } = require("../util");

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

async function updateUser(req, res, id) {
  try {
    const user = await User.findByID(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ Message: "User not found" }));
    } else {
      const body = await getPostData(req);
      const { title, name, username } = JSON.parse(body);

      const userData = {
        title: title || user.title,
        name: name || user.name,
        username: username || user.username,
      };

      const updatedUser = await User.update(id, userData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updatedUser));
    }
  } catch (err) {
    console.log(err);
  }
}

const deleteUser = async (req, res, id) => {
  try {
    const user = await User.findByID(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ Message: "User not found" }));
    } else {
      await User.remove(id);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ Message: `User at ${id} has been removed` }));
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
