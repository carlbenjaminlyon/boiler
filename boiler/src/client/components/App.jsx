import React, { useState } from 'react';
// import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css';

// Imports //
import Weather from './Weather.jsx';
import FavoritesList from './FavoritesList.jsx';
import Search from './Search.jsx';
import Store from './Store.jsx';
/////////////

const App = () => {
  const [item] = useState(null);
  const [store, useStore] = useState([]);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 5 }}
          />
          <MenuIcon />

            <Typography variant='h4' align='center'>
              Boiler!
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <Weather />
              </Typography>
            </Container>
        </div>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <FavoritesList />
              </Typography>
            </Container>
        </div>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <Search useStore={ useStore } />
              </Typography>
            </Container>
        </div>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <Store store={ store } />
              </Typography>
            </Container>
        </div>
      </main>
    </>
  );

};

export default App;