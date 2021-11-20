//Server definition
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// const PORT = 8080;
dotenv.config({ path: '../.env' });
const { PORT } = process.env;
// const { DBName } = require('./db');
const distPath = path.resolve(__dirname, '...', 'dist');
const { db, User, Restaurant, Users_restaurants } = require('./database/index.js');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(distPath));

////Server Routing////

//GET

//POST

//PUT

//DELETE

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