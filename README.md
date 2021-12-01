# boiler

**Overview**
Boiler is an app that makes it easier for a user to find the restaurants in New Orleans that have crawfish.

**Database**
We used a MYSQL many to many relational database. This allowed us to utilize joined tables to keep track of user details regarding their favorite restaurants.

**Server**
We used Node.JS Express for our server.

**Authentication**
Our authentication was done using OAuth. We have a google strategy set up so users must log in with their google account. Once logged in, the user has access to the whole site. 

**APIS**

We used three external apis for this project:

1. Yelp Fusion Api -
 https://www.yelp.com/developers/documentation/v3/get_started
 This allowed us to search for restaurants in the category 'Crawfish' by location.
 
 2. Acuweather Api -
  https://developer.accuweather.com/apis
  This allowed us to get a 5 day forecast based on the city location.
 
 3. Google Places Api -
  https://developers.google.com/maps/documentation/places/web-service/overview
  This allowed us to see the location of the restaurants on a map of New Orleans.

**Styling**

We used MaterialUI and emotion-react for our styling.

**Framework**

The framework we used was React with React hooks.

**Start Up**

in /config folder, make a file named `keys.js'. This file needs the following info with your keys added.

```
`module.exports = {
  googleMaps: {
    APIkey: 'YOUR KEY'
  },
  session: {},
  api: {
    openWeather: 'YOUR KEY',
  },
  yelp: {
    clientID: 'YOUR ID',
    APIkey: 'YOUR KEY'
  },
  googleOAuth: {
    APIkey: 'YOUR KEY'
  }
}`
```



**Start Up Scripts**

`npm run build:client-dev` to run webpack
`npm start` to start the server on port 3000 and initialize the database.

make sure you also have an instance of mysql running in a separate terminal.

