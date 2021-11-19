//Model: Joined

const Restaurant, User = require('./');

const db = require('../index');


const Users_restaurants = db.define('Users_restaurants', {}, {timestamps: false});
User.belongsToMany(Restaurant, { through: Users_restaurants });
Restaurant.belongsToMany(User, { through: Users_restaurants });


module.exports = Users_restaurants;