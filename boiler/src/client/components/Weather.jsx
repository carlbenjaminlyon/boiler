import React, { useEffect, useState } from 'react';
import WeatherDay from './WeatherDay.jsx';

import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import ACCUWEATHER from process.env;
// import axios from 'axios';
// import { TextField } from '@mui/material/TextField';
// import { Autocomplete } from '@mui/material/Autocomplete';
// import { CircularProgress } from '@mui/material/CircularProgress';

//Async function


const Weather = () => {




  const apiKey = ``;
  // const apiKey = ACCUWEATHER;

  const locationKey = `30307_PC`;

  const [weatherInfo, setWeatherInfo] = useState();

  //api expects two digit number to represent icon filename
  const padNum = (num) => {
    const stringNum = num + '';
    console.log(typeof stringNum);
    const stringLength = stringNum.length;

    if (stringLength === 1) {
      return '0' + stringNum; // 1 --> 01
    } else {
      return stringNum; // 12 --> 12
    }
  };


  //only gets called when component mounts
  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}`)
      .then(res => res.json())
      .then(res => setWeatherInfo(res.DailyForecasts.map(daily => {
        return {
          min: daily.Temperature.Minimum.Value,
          max: daily.Temperature.Maximum.Value,
          weatherType: daily.Day.IconPhrase,
          weatherIcon: daily.Day.Icon,
          // weatherIcon: padNum(daily.Day.Icon)
        };
      })))
      .catch((err) => { console.log('Could not retrieve weather data', err); });
  }, []);


  return (
    <div>
      {!!weatherInfo && weatherInfo.map((i, index) => (
        <div key={index}>
          <WeatherDay
            min={i.min}
            max={i.max}
            weatherType={i.weatherType}
            weatherIcon={i.weatherIcon} />
        </div>
      ))}
    </div>
  );

};

export default Weather;