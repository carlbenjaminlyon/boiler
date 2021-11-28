import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Store from './Store.jsx';
const key = require('../../../config/keys').yelp.APIkey;

//search restaurants

const Search = () => {

  const [ store, useStore ] = useState([]);
  console.log('store', store[0]);
  const getCrawfish = () => {
    return axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=neworleans&categories=crawfish', {
      headers: {
        Authorization: `Bearer ${key}`,
        Origin: '',
        'X-Requested-With': ''
      }
    })
      .then((response) => response.data.businesses)
      .then((businesses) => { useStore(businesses)
        businesses.forEach((store) => {
          axios.post('/api/restaurants', {title: store.name, price: store.price, address: store.location.address1, lat: store.coordinates.latitude, long: store.coordinates.longitude})
            .then((res) => { console.log('Saved Restaurant' ); })
            .catch((err) => { console.log('Unable to save restaurant'); });
        });
      })
      .catch(err => console.error('error in yelp api call: ', err));
  };


  // useEffect(() => {
  //   useStore
  // })


  return (
    <div>
      <button onClick={getCrawfish}>where da crawfish</button>
      <p>{'Your Stores:'}</p>
      <div>
        {
          store.map((x) => (
            <Store store={x} />
          ))
        }
      </div>
    </div>
  );
};

export default Search;