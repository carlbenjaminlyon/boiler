import React, { useState, createContext, useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useBetween } from 'use-between';
import axios from 'axios';


// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const googleKey = require('../../../config/keys').googleOAuth.APIkey;

const clientId = googleKey;

import { useSharedUser } from './User.jsx';
// export const UserContext = createContext();

// eslint-disable-next-line func-style
function GoogleSignIn() {

  const {currentUser, changeCurrentUser} = useSharedUser();

  const onSuccess = (res) => {

    axios.post('/api/users', res.profileObj)
      .then((user) => {
        changeCurrentUser(res.profileObj);
        console.log('User successfully saved', currentUser) })
      .catch((err) => { console.log('Unable to save user', err); })
      .finally(() => {changeCurrentUser(res.profileObj)});
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      'Failed to login.'
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default GoogleSignIn;

