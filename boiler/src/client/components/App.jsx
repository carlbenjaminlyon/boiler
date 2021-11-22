import React, { useState } from 'react';

import Search from './Search.jsx';

const App = () => {
  const [thing] = useState(null);



  return (
    <div>
      <h1>Boiler</h1>
      <Search />
    </div>
  );

};

export default App;