//Server definition
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// const PORT = 8080;
dotenv.config({ path: '../.env' });
const PORT = 3000;
// const { DBName } = require('./db');
const distPath = path.resolve(__dirname, '...', 'dist');
const { db, User, Restaurant, Users_restaurants } = require('./database/index.js');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(distPath));

////Server Routing////

//GET
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('./public/index.html'));
});


app.get('/api/restaurants', (req, res) => {
  Restaurant.findAll()
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// gets a user's favorite restaurants
app.get('/api/favorites/:id', (req, res) => {
  User.findByPk(req.params.id, {
    include: [
      {
        model: Restaurant,
        as: favoriteRestaurants
      }
    ]
  })
    .then(data => {
      res.status(200).send(data.favoriteRestaurants);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

//POST
// adds a user
app.post('/api/users', (req, res) => {
  const {name, emailAddress, latitude, longitude} = req.body;
  User.create({
    username: name,
    email: emailAddress,
    lat: latitude,
    long: longitude
  }).then(user => {
    res.status(201).json(user);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.post('/api/restaurants', (req, res) => {
  const { title, price, address, lat, long } = req.body;
  Restaurant.create({
    title: title,
    price: price,
    address: address,
    lat: lat,
    long: long
  })
    .then(restaurant => {
      res.status(201).json(restaurant);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

//PUT

//DELETE
app.delete('/api/restaurants/:id', (req, res) => {
  Restaurant.destroy({ where: { id: req.params.id }})
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

//connection query

app.listen(PORT, () => {
  console.log(`
  Listening at: http://127.0.0.1:${PORT}
  `);
});

////Server Listener////
// initializeSchema({ connection: db })
//   .then(() => {
//     console.log('Initialized schema');
//     app.listen(PORT, () => console.info(`
//       Docs at http://127.0.0.1:${PORT}/__docs
//       Shortly is listening at http://127.0.0.1:${PORT}
//     `));
//   })
//   .catch((err) => console.error('Failed to initialize schema', err));