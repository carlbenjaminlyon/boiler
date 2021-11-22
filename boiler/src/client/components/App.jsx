import React, { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core';
//I want to import icons and additional useful stuff for this
import '../styles/style.css';

// Imports //
import Weather from './Weather.jsx';
import FavoritesList from './FavoritesList.jsx';
/////////////

import Search from './Search.jsx';

const App = () => {
  const [item] = useState(null);



  return (
    <div>
      <h1>Boiler</h1>
      <Search />
    </div>

    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Typography variant='h2' align='center'>
              Boiler!
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
            <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  <Weather />
                  <FavoritesList />
              </Typography>
            </Container>
        </div>
      </main>
    </>
  );

};

export default App;