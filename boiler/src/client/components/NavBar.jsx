import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, useRouteMatch} from 'react-router-dom';

import FavoriteItem from './FavoriteItem.jsx';
import FavoritesList from './FavoritesList.jsx';
import Search from './Search.jsx'
import Weather from './Weather.jsx';
import GoogleSignIn from './GoogleSignIn.jsx';
import Events from './Events.jsx'


const NavBar = () => {
  const { path, url } = useRouteMatch();

  const [ menu, setMenu ] = useState('none');

  const toggleMenu = () => {
    setMenu(menu === 'none' ? 'block': 'none');
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light trueNav">
        <a className="navbar-brand">Boiler</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display: menu}}>
          <div className="navbar-nav me-auto">
            <Link to={`${url}/search`} className="nav-item nav-link">Search</Link>
            <Link to={`${url}/weather`} className="nav-item nav-link">Weather</Link>
            <Link to={`${url}/events`} className="nav-item nav-link">Events</Link>
          </div>
          <div className="navbar-nav">
          </div>
        </div>
      </nav>

      <Routes>
          <Route exact path="/">
            <GoogleSignIn />
          </Route>
          <Route path={`${path}/weather`}>
            <Weather />
          </Route>
          <Route path={`${path}/search`}>
            <Search />
          </Route>
          <Route path={`${path}/events`}>
            <Events />
          </Route>
        </Routes>

    </div>


  )

}

export default NavBar;