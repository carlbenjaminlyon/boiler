const axios = require('axios');
const key = require('../../../config/keys').yelp.APIkey;

const getCrawfish = (location) => {
  return axios.get(`https://api.yelp.com/v3/businesses/search?location=${location}&categories=crawfish`, {
    headers: {
      Authorization: `Bearer ${key}`
    }
  })
  .then(response => response.data.businesses)
  .catch(err => console.error('error in yelp api call: ', err));
};

module.exports = {
  getCrawfish
}