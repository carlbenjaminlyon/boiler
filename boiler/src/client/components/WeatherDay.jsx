import React from 'react';



const WeatherDay = ({min, max, weatherType}) => {

  return (
    <div>
      <div>Type: {weatherType}</div>
      <div>Temp: {min} / {max}</div>
    </div>
  );
};

export default WeatherDay;