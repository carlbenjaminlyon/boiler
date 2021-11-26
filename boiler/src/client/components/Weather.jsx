import React, { useState } from 'react';
import { Button } from '@material-ui/core';


const Weather = () => {
  const [item] = useState(null);
//API for
//https://openweathermap.org/forecast5

  return (
    <div>
      <h2>Weather</h2>
      <div>
        <Button color="primary">Hello World!</Button>
      </div>
    </div>
  );

};

export default Weather;