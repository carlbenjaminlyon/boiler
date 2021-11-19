//Database
const { Sequelize } = require('sequelize');

//
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'boiler'
});

//Schema Declaration
const Boiler = sequelize.define('Boiler', {

});

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

