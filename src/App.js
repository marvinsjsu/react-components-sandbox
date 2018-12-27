import React, { Component } from 'react';
import { Login, Register, withAuth, Auth, AuthCode, AuthenticatorSetup, AuthenticatorDisable, PasswordReset, PasswordUpdate } from 'presearch-react-components';
import './App.css';

class App extends Component {
  render() {

    const { login, getPasswordStrength } = this.props;

    console.log("PASSWORD STRENGTH: ", getPasswordStrength('a123c'));

    console.log("TYPEOF LOGIN: ", typeof login);
    console.log("LOGIN: ", login);

    return (
      <div
        className="App"
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}
      >
        <h4>Auth component (Sign-in/Sign-up flow, will need to have CORs plugin similar to
          <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">
            this
          </a>)
        </h4>
        <Auth />

        <hr/>
        <h4>Password Update component</h4>
        <PasswordUpdate />

        <hr/>
        <h4>Authentication Setup</h4>
        <AuthenticatorSetup />

        <hr/>
        <h4>Authentication Disable</h4>
        <AuthenticatorDisable />
      </div>
    );
  }
}
export default withAuth(App);