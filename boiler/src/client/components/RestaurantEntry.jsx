import React, { useState } from 'react';
import axios from 'axios';
import {Button, Box, CardHeader, CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import { CardActions } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';

const RestaurantEntry = (props) => {
  // let initialIcon = BookmarkAddOutlinedIcon;
  // if (props.favorite) {
  //   initialIcon = BookmarkAddedOutlinedIcon;
  // }
  // const [bookmarkIcon, setBookmarkIcon] = useState(initialIcon);

  const {yelpRating, title, address, price, imageUrl, id} = props.restaurant;

  // const updateRating = (e) => {
  //   e.preventDefault();
  //   axios.put(`/api/restaurants/${id}`, {userRating: e.currentTarget.value})
  //     .then(console.log('voted!'))
  //     .catch(err => {
  //       console.error(err);
  //       console.log('vote didn\'t count');
  //     });
  // };

  const toggleFavorites = () => {
    if (props.favorite) {
      axios.delete(`/api/favorites/${currentUser.id}`, {title: title})
        .then(() => {
          console.log('successfully removed from favorites');
          setBookmarkIcon(BookmarkAddOutlinedIcon);
        })
        .catch(err => {
          console.error(err);
          console.log('failed to add favorite');
        });
    } else {
      axios.put(`/api/favorites/${currentUser.id}`, {id: id })
        .then(() => {
          console.log('successfully added to favorites');
          setBookmarkIcon(BookmarkAddedOutlinedIcon);
        })
        .catch(err => {
          console.error(err);
          console.log('failed to add favorite');
        });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    toggleFavorites();
  };


  return (

    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        title={title}
        subheader="November 24th, 2021" />
      <CardMedia
        component="img"
        height="194"
        image=""
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is just some text in the typography field to fill in the space while we figure out whats next.
        </Typography>
        <Typography>Address: {address}</Typography>
        <Typography>Price: ${price}</Typography>
        <Typography>Yelp Rating:{yelpRating}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Remove from Favorites" placement ="right-start" arrow>
          {
            props.isFavorite
              ? (
                <IconButton label='Toggle Favorites'>
                  <BookmarkAddedOutlinedIcon />
                </IconButton>
              )
              :
              (<IconButton label='Toggle Favorites'>
                <BookmarkAddOutlinedIcon />
              </IconButton>
              )
          }
        </Tooltip>
      </CardActions>
    </Card>
  );

};

export default RestaurantEntry;