//Model: Users

const { Sequelize, DataTypes } = require('sequelize');
const db  = require('../index');

// console.log("8888888888888888888888888888888888", db);

//Model: User
const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.STRING(255),
  email: DataTypes.STRING(255),
  lat: DataTypes.DECIMAL(3, 6),
  long: DataTypes.DECIMAL(3, 6),
});

const getUser = () => {};
const addUser = () => {};
const deleteUser = () => {};
const updateUser = () => {};


//CRUD ops for Users
module.exports = {
  User,
  getUser: getUser,
  addUser: addUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
}

// module.exports = new User();