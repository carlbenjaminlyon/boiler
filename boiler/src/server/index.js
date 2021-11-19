//Server definition

const path = require('path');
const express = require('express');

// const { DBName } = require('./db');
const distPath = path.resolve(__dirname, '...', 'dist');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(distPath));

////Server Routing////

//GET

//POST

//PUT

//DELETE

////Server Listener////
app.listen(port, () => {
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});