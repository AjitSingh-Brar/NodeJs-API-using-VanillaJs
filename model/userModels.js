let users = require("../data/users.json");
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
    const user = users.find((u) => u.id === id);
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

const update = (id, user) => {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((u) => u.id === id);
    users[index] = { id, ...user };
    writeDataToFile("./data/users.json", users);
    resolve(users[index]);
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    users = users.filter((user) => user.id === id);
    writeDataToFile("./data/users.json", users);
    resolve();
  });
};

module.exports = {
  findAll,
  findByID,
  create,
  update,
  remove,
};
