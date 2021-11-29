import React, { useState, useEffect } from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import { useSharedUser } from './User.jsx';
import { Grid } from '@material-ui/core';
import axios from 'axios';
const key = require('../../../config/keys').yelp.APIkey;

const RestaurantList = (props) => {

  const { currentUser } = useSharedUser();
  const [favorites, setFavorites] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios.get('/api/restaurants')
      .then((results) => {
        console.log('results', results.data);
        setRestaurants(results.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getCrawfish = () => {
    return axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=neworleans&categories=crawfish', {
      headers: {
        Authorization: `Bearer ${key}`,
        Origin: '',
        'X-Requested-With': ''
      }
    })
      .then((response) => response.data.restaurants)
      .then((restaurants) => { setRestaurants(restaurants)
        restaurants.forEach((store) => {
          axios.post('/api/restaurants', {title: store.name, price: store.price, address: store.location.address1, lat: store.coordinates.latitude, long: store.coordinates.longitude, imageUrl: store.image_url})
            .then((res) => { console.log('Saved Restaurant' ); })
            //call getCrawfish first, then get restaurants, then allow it to render
            .catch((err) => { console.log('Unable to save restaurant'); });
        });
      })
      .catch(err => console.error('error in yelp api call: ', err));
  };


  // const getFavorites = () => {
  //   axios.get('/api/favorites/', {email: currentUser.email})
  //     .then(results => setFavorites(results))
  //     .catch(err => console.error(err));
  // };

  useEffect(() => {
    getCrawfish();
    // getRestaurants();
  }, []);

  const array = props.favorites ? favorites : restaurants;
  console.log('from restaurants', restaurants);
  return (
    <div>
      <h2>Restaurants in the Area</h2>
      <div className="restaurant-list">
        {
          restaurants.map(store => {
            return (
              <RestaurantEntry restaurant={store} key={store.id} isFavorite={favorites.includes(store)}/>
            );
          })
        }
      </div>
    </div>
  );

};

export default RestaurantList;