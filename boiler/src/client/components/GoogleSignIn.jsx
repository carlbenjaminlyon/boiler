import React from 'react';

class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  // render() {
  //   return (
  //     <div class="g-signin2" data-onsuccess={this.onSignIn}></div>
  //   );
  // }

  render() {
    return (
      <div>
        <div id="g_id_onload"
          data-client_id="726401266288-2vtmi6h3uujngjisd9uu7ic0t95f7v8b.apps.googleusercontent.com"
          data-context="signup"
          data-ux_mode="popup"
          data-login_uri="http://localhost:3000/login"
          data-auto_prompt="false">
        </div>

        <div class="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="filled_blue"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
        </div>
      </div>
    );
  }
}

export default GoogleSignIn;
