import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios';
// import { TextField } from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material/Autocomplete';
// import { CircularProgress } from '@mui/material/CircularProgress';

//Async function

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Weather = () => {
  //weather

  // const [weather, setWeather] = useState('');
  // const [city, setCity] = useState('');
  // const apiKey = process.env.OPEN_WEATHER;

  // //visual
  // const [open, setOpen] = useState(false);
  // const [options, setOptions] = useState([]);
  // const loading = open && options.length === 0;

  // //API for
  // //https://openweathermap.org/forecast5

  // const apiCall = (e) => {
  //   e.preventDefault();
  //   const location = e.target.elements.loc.value;
  //   const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
  //   const req = axios.get(url);
  //   const res = await req;
  //   setWeather({
  //     descp: res.data.weather[0].description,
  //     temp: res.data.main.temp,
  //     city: res.data.name,
  //     humidity: res.data.main.humidity
  //   });
  //   setCity(res.data.name);
  // };

  // const Weath = () => {
  //   return <div>
  //     <div>
  //       Weather information for {city}
  //     </div>
  //   </div>
  // };


  return (
    <Box sx={{flexgrow: 1}}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </Box>
  );

};

export default Weather;