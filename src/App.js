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
        <Auth />
        <PasswordUpdate />
        <AuthenticatorSetup />
      </div>
    );
  }
}
export default withAuth(App);