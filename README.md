# boiler

**OverView**



**Database**


**Server**


**Authentication**


**APIS**

**Front End**

**Styling**

**Start Up**

in /config folder, make a file named ```keys.js. This file needs the following info with your keys added.

```module.exports = {
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
}

**Start Up Scripts**

npm run build:client-dev to run webpack
npm start to start the server on port 3000

