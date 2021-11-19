//Model: Restaurant


const db = require('../index');
const { DataTypes } = db;


const Restaurant = db.define('Restaurant', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING(255),
  price: DataTypes.DECIMAL(4, 2),
  address: DataTypes.STRING(255),
  lat: {
    type: DataTypes.DECIMAL(3, 6),
    allowNull: false
  },
  long: {
    type: DataTypes.DECIMAL(3, 6)
  },
  yelpRating: DataTypes.DECIMAL(1, 1),
  userRating: DataTypes.DECIMAL(1, 4),
  reviewCount: {
    type: DataTypes.INTEGER,
  },
});

//Func to add to this table
//CRUD ops for Restaurants

module.exports = Restaurant;