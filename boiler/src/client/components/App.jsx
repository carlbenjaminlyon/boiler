import React, { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css';

// Imports //
import Weather from './Weather.jsx';
import FavoritesList from './FavoritesList.jsx';
import Search from './Search.jsx';
/////////////

const App = () => {
  const [item] = useState(null);



  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' align='center'>
              Boiler!
          </Typography>
          <Typography variant='h4' color='textPrimary'>
            <Weather />
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h4' color='textPrimary'>
              Text here, to be replaced.
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
              <Search />
            </Typography>
          </Container>
        </div>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <Search />
              </Typography>
            </Container>
        </div>
      </main>
    </>
  );

};

export default App;