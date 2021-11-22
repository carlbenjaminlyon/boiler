const { Router } = require('express');
const restRouter = Router();

const { User } = require('../database/index');
const { getCrawfish } = require('../api/getStores.js');

//gets restaurants from db
restRouter.get('/', (req, res) => {
  const { username } = req.user;
  
});