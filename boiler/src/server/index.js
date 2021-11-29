//Server definition
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// const PORT = 8080;
dotenv.config({ path: '../.env' });
const PORT = 3000;
// const { DBName } = require('./db');
const distPath = path.resolve(__dirname, 'dist');
const { db, User, Restaurant, Users_restaurants } = require('./database/index.js');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./dist'));


////Server Routing////

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/restaurants', (req, res) => {
  Restaurant.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// gets a user's favorite restaurants
app.get('/api/favorites/', (req, res) => {
  User.findOne({where: {email: req.body.email}}, {
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

// checks if a user already exists
app.get('/api/users/', (req, res) => {
  const { email } = req.body;
  User.findOne({where: {email: email}})
    .then((data) => {
      console.log(data);
      res.status(200).json(data) })
    .catch((err) => {console.log('Could not find user.')});
});


//POST
// adds a user
app.post('/api/users', (req, res) => {
  const {name, email, lat, long} = req.body;
  User.create({
    username: name,
    email: email,
    lat: lat,
    long: long
  }).then(user => {
    res.status(201).json(user);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.post('/api/restaurants', (req, res) => {
  const { title, price, address, lat, long, imageUrl, yelpRating } = req.body;
  Restaurant.create({
    title: title,
    price: price,
    address: address,
    lat: lat,
    long: long,
    imageUrl: imageUrl,
    yelpRating: yelpRating
  })
    .then(restaurant => {
      res.status(201).json(restaurant);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// adds a restaurant to favorites
app.post('/api/favorites/', (req, res) => {
  const { email, restaurantId } = req.body;
  const targetUser = User.findOne({where: {email: email}});

  Users_restaurants.create({
    UserId: targetUser.id,
    RestaurantId: restaurantId
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

//PUT
// updates restaurant user ratings
app.put('/api/restaurants/:id', (req, res) => {
  const {userRating} = req.body;
  const target = Restaurant.findByPk(req.params.id);
  const newScore = target.userRating * target.reviewCount + userRating;
  target.set({
    userRating: newScore,
  });
  target.increment('reviewCount');
  target.save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// updates restaurant with the rating from yelp
// must have restaurant title in body
app.put('/api/restaurants', (req, res) => {
  const {yelpRating, title} = req.body;
  Restaurant.update({yelpRating: yelpRating}, {
    where: {
      title: title
    }
  })
    .then(() => {
      res.sendStatus(200);
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// updates user's location
// Body must have properties: lat and long
// ID in params is UserID
app.put('/api/users/:id', (req, res) => {
  const {lat, long} = req.body;
  User.update({lat: lat, long: long}, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

//DELETE
// ID in params is RestaurantID
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

// ID in params is UserID, restaurant name in body
app.delete('/api/favorites/', (req, res) => {
  const {title, userEmail} = req.body;
  const targetRestaurant = Restaurant.findOne({
    where: {
      title: title
    }
  });
  const currentUser = User.findOne({
    where: {
      email: userEmail
    }
  });

  Users_restaurants.destroy({
    where: {
      UserId: currentUser.id,
      RestaurantId: targetRestaurant.id
    }
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.delete('/api/users/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
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