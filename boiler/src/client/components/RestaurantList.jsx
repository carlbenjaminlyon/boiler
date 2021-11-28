import React, { useState, useEffect } from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
import { useSharedUser } from './User.jsx';
import axios from 'axios';

const RestaurantList = (props) => {

  const { currentUser } = useSharedUser();
  const [restaurants, setRestaurants] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // const getRestaurants = () => {
  //   axios.get('/api/restaurants')
  //     .then(results => setRestaurants(results))
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  // const getFavorites = () => {
  //   axios.get('/api/favorites/', {email: currentUser.email})
  //     .then(results => setFavorites(results))
  //     .catch(err => console.error(err));
  // };

  // useEffect(() => {
  //   getRestaurants();
  //   getFavorites();
  // });
  const array = props.favorites ? favorites : restaurants;
  return (
    <div>
      <h2>Restaurants in the Area</h2>
      <div className="restaurant-list">
        {/* {
          array.map(store => {
            return (
              <RestaurantEntry restaurant={store} key={store.id} isFavorite={favorites.includes(store)}/>
            );
          })
        } */}
        <RestaurantEntry />
      </div>
    </div>
  );

};

export default RestaurantList;