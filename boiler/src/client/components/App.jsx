// <<<<<<< HEAD
// <<<<<<< HEAD
// =======
// >>>>>>> 0856298f2105fbb6653715a44fe114ed90686c56
import React, { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css';

// Imports //
import Weather from './Weather.jsx';
import FavoritesList from './FavoritesList.jsx';
<<<<<<< HEAD
// <<<<<<< HEAD
import Events from './Events.jsx';
import GoogleSignIn from './GoogleSignIn.jsx';
// =======
import Search from './Search.jsx';
// >>>>>>> 8f540393d297ffb10ee2f175449b54b73a696342
=======
// import Search from './Search.jsx';
>>>>>>> 5015b98b94f93ece6bc7cbf7ded94242248a8d8e
/////////////

const App = () => {
  const [item] = useState(null);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
<<<<<<< HEAD
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 5 }}
          />
          <MenuIcon />

          <Typography variant='h4' align='center'>
              Boiler!
          </Typography>
=======
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' align='center'>
              Boiler!
          </Typography>
          <Typography variant='h4' color='textPrimary'>
            <Weather />
          </Typography>
>>>>>>> 5015b98b94f93ece6bc7cbf7ded94242248a8d8e
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h4' color='textPrimary'>
<<<<<<< HEAD
              <Weather />
=======
              Text here, to be replaced.
>>>>>>> 5015b98b94f93ece6bc7cbf7ded94242248a8d8e
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
<<<<<<< HEAD
              <Events />
=======
              {/* <Search /> */}
>>>>>>> 5015b98b94f93ece6bc7cbf7ded94242248a8d8e
            </Typography>
          </Container>
        </div>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h5' color='textPrimary'>
              <GoogleSignIn />
            </Typography>
          </Container>
        </div>
        <div>
            {/* <Container maxWidth="sm">
              <Typography variant='h4' color='textPrimary'>
                  {/* <Search /> */}
              </Typography>
            </Container> */}
        </div>
      </main>
    </>
  );

};

// <<<<<<< HEAD
// =======
// import React, { useState } from 'react';
// import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core';
// //I want to import icons and additional useful stuff for this
// import '../styles/style.css';

// // Imports //
// import Weather from './Weather.jsx';
// import FavoritesList from './FavoritesList.jsx';
// /////////////

// import Search from './Search.jsx';

// const App = () => {
//   const [item] = useState(null);



//   return (
//     <div>
//       <h1>Boiler</h1>
//       <Search />
//     </div>

//     <>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//             <Typography variant='h2' align='center'>
//               Boiler!
//             </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         <div>
//             <Container maxWidth="sm">
//               <Typography variant='h4' color='textPrimary'>
//                   <Weather />
//                   <FavoritesList />
//               </Typography>
//             </Container>
//         </div>
//       </main>
//     </>
//   );

// };

// // >>>>>>> f3ab80f2231ac88db051baf70221a9b2fc955f03
// =======
// >>>>>>> 0856298f2105fbb6653715a44fe114ed90686c56
export default App;