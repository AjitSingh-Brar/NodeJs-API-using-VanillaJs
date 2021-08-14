const users = require("../data/users.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../util");

//desc getting all users
//route GET  /api/users
const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

//desc getting user by id
//route GET  /api/users/2
const findByID = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === parseInt(id));
    resolve(user);
  });
};

//desc creating a user
//route POST  /api/users
const create = (user) => {
  return new Promise((resolve, reject) => {
    let newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile("./data/users.json", users);
    resolve(newUser);
  });
};

module.exports = {
  findAll,
  findByID,
  create,
};
