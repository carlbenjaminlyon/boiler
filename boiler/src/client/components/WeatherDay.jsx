import React from 'react';



const WeatherDay = ({min, max, weatherType, weatherIcon}) => {
  console.log(weatherIcon);
  return (
    <div>
      <div>Icon:
        <img src={`https://developer.accuweather.com/sites/default/files/0${weatherIcon}-s.png`} />
      </div>
      <div>Type: {weatherType}</div>
      <div>Temp: {min} / {max}</div>
    </div>
  );
};

export default WeatherDay;