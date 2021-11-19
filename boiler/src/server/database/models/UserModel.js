//Model: Users

const db = require('../index');
const { DataTypes } = db;

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

//CRUD ops for Users
//Find
//FindOne
//whateverelse

module.exports = User;