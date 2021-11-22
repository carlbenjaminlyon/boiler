<<<<<<< HEAD
import React, { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css';

// Imports //
import Weather from './Weather.jsx';
import FavoritesList from './FavoritesList.jsx';
/////////////

const App = () => {
  const [item] = useState(null);



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
      </main>
    </>
  );

};

=======
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

>>>>>>> f3ab80f2231ac88db051baf70221a9b2fc955f03
export default App;