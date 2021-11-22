import React, { useState } from 'react';
import FavoriteItem from './FavoriteItem.jsx';

const FavoritesList = () => {
  const [item] = useState(null);

  return (
    <div>
      <h2>Favorites List</h2>
    </div>
  );

};

export default FavoritesList;