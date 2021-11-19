//Database
const { Sequelize, DataTypes, DECIMAL } = require('sequelize');

const User = require('./models/UserModel');
const Restaurant = require('./models/RestaurantModel');
const Users_restaurants = require('./models/Joined');


console.log(User);

const db = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'boiler'
});


module.exports = {
  db: db,
  User,
  Restaurant,
  Users_restaurants
};



/*
Users table:
-id: Number, auto-increment
-username: String,
*/


/*
restaurants table:
id: Number, auto-increment
title: String,
price: Number,
address: String (physical address)
geo: {
  lat: Number
  lon: Number (frontend distance to you)
}
photos: String (url to image)
yelpRating: Number
*/






/*
Joined Users_restaurants
id: Number, auto-increment
foreign_key: joined table (user id)
foreign_key: joined table (restaurant id)
*/










/*
Schema: {

}
*/

/*
Documenu Table:
-restaurant_id: String,
-restaurant_name: String,
-geo: {
  lat: Number
  lon: Number
},
-address: String,
-menu_item_price: Number,
-favorite: Boolean,
*/

/*
YELP table:
id: Number, auto-increment
businessName: String

*/



