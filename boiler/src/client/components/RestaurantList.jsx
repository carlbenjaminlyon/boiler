import React, { useState, useEffect } from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import { useSharedUser } from './User.jsx';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


import axios from 'axios';
const key = require('../../../config/keys').yelp.APIkey;

const RestaurantList = (props) => {

  const { currentUser } = useSharedUser();
  const [favorites, setFavorites] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios.get('/api/restaurants')
      .then((results) => {
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
      .then((response) => {
        response.data.businesses.forEach((store) => {
          axios.post('/api/restaurants', {title: store.name, price: store.price, address: store.location.address1, lat: store.coordinates.latitude, long: store.coordinates.longitude, imageUrl: store.image_url, yelpRating: store.rating})
            .then((res) => { console.log('Saved Restaurant' ); })
            //call getCrawfish first, then get restaurants, then allow it to render
            .catch((err) => { console.log('Unable to save restaurant'); });
        });
      })
      .then(getRestaurants())
      .catch(err => console.error('error in yelp api call: ', err));
  };


  const getFavorites = () => {
    axios.post('/api/favorites/', {email: currentUser.email})
      .then(results => setFavorites(results))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getCrawfish();
    getRestaurants();
    // getFavorites();
  }, []);

  const array = props.favorites ? favorites : restaurants;
  return (
    <div>
      <h2>Restaurants in the Area</h2>
      <div className="restaurant-list">
        <Grid
          container
          spacing={4}
          justify="center"
        >
          {
            !!array && array.map(store => {
              return (
                <Grid item xs={12} sm={6} md={4} zeroMinWidth={0}>
                  <RestaurantEntry restaurant={store} key={store.id} isFavorite={favorites.includes(store)}/>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    </div>
  );

};

export default RestaurantList;