# boiler

**OverView**



**Database**


**Server**


**Authentication**
Our authentication was done using oauth and passport. We have a google strategy set up so users must log in with their google account. Once logged in, the user has access to the whole site. 

**APIS**

We used two external apis for this project:

1. Yelp Fusion Api -
 https://www.yelp.com/developers/documentation/v3/get_started
 This allows us to search for restaurants in the category 'Crawfish' by location.

**Front End**

**Styling**

We used Material UI for our styling.

**Start Up**

in /config folder, make a file named `keys.js'. This file needs the following info with your keys added.

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

**Start Up Scripts**

`npm run build:client-dev` to run webpack
`npm start` to start the server on port 3000

