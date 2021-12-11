import React, { useState, useContext, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css';

// Imports //
import Login from './Login.jsx';
import Weather from './Weather.jsx';
// import FavoritesList from './FavoritesList.jsx';
import Events from './Events.jsx';
import GoogleSignIn from './GoogleSignIn.jsx';
import Search from './Search.jsx';
import RestaurantList from './RestaurantList.jsx';
import user from './GoogleSignIn.jsx';
import Profile from './Profile.jsx';
import axios from 'axios';


//Context
import { useSharedUser } from './User.jsx';

const App = () => {

  const { currentUser, changeCurrentUser } = useSharedUser();
  const { signedIn, setSignedIn } = useState(false);


  //Check if user exists in DB
  //If yes, get their restaurants
  //If not, create db entry for them


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 5 }} />
          <MenuIcon />

          <Typography variant='h4' align='center'>
                    Boiler!
          </Typography>
          <Typography variant='h4' color='textPrimary'>
            <Weather />
          </Typography>
          <GoogleSignIn />
        </Toolbar>
      </AppBar>
      <main style={{'margin-top': '180px'}}>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h4' color='textPrimary'>
              {/* <Search /> */}

            </Typography>
          </Container>
        </div>


        <div>
          <Container maxWidth="sm">
            <Typography variant='h4' color='textPrimary'>
              {/* <Search /> */}
            </Typography>
          </Container>
        </div>
        <div>
          <Container maxWidth="lg">
            <RestaurantList favorites={false}/>
          </Container>
        </div>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h5' color='textPrimary'>
              {/* <Profile /> */}
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );

};

export default App;