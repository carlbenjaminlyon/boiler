import React, { useEffect, useState } from 'react';
import WeatherDay from './WeatherDay.jsx';

import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios';
// import { TextField } from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material/Autocomplete';
// import { CircularProgress } from '@mui/material/CircularProgress';

//Async function


const Weather = () => {




  const apiKey = `DcCqa6AACslGAnHwyHTSxi1KqS5D8CG2`;
  const locationKey = `30307_PC`;

  const [weatherInfo, setWeatherInfo] = useState();
  //only gets called when component mounts
  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}`)
      .then(res => res.json())
      .then(res => setWeatherInfo(res.DailyForecasts.map(daily => {
        return {
          min: daily.Temperature.Minimum.Value,
          max: daily.Temperature.Maximum.Value,
          weatherType: daily.Day.IconPhrase,
        };
      })));
  }, []);

  //testing to see if it returns how I want it to return
  // useEffect(() => {
  //   console.log(weatherInfo);
  // }, [weatherInfo]);


  return (
    <div>
      {!!weatherInfo && weatherInfo.map((i, index) => (
        <div key={index}>
          <WeatherDay min={i.min} max={i.max} weatherType={i.weatherType} />
        </div>
      ))}
    </div>
  );

};

export default Weather;