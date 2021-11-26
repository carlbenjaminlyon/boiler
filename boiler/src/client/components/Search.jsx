import React, { useState, useEffect } from 'react';
import axios from 'axios';
const key = require('../../../config/keys').yelp.APIkey;

//search restaurants

const Search = () => {

const getCrawfish = (location) => {
  return axios.get(`https://api.yelp.com/v3/businesses/search?location=${location}&categories=crawfish`, {
    headers: {
      Authorization: `Bearer ${key}`
    }
  })
  .then(response => console.log(response.data.businesses))
  .catch(err => console.error('error in yelp api call: ', err));
};

useEffect(() => {
  getCrawfish('neworleans')
})


  return (
    <div>
      <input type="text" placeholder='Search' />
    </div>
  )
};

export default Search;