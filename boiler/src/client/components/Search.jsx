import React, {useState} from 'react';
import axios from 'axios';

//search restaurants

const Search = () => {


  const [ search, setSearch ] = useState('');

  return (
    <div>
      <input type="text" placeholder='Search' />
    </div>
  )
};

export default Search;