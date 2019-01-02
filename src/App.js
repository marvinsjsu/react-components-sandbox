import React, { Component } from 'react';
import { Login, Register, withAuth, Auth, AuthCode, AuthenticatorSetup, AuthenticatorDisable, PasswordReset, PasswordUpdate } from 'react-components';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'authenticator_disable',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(display) {
    console.log('display: ', display);
    this.setState({
      display: display
    });
  }


  render() {

    const { display } = this.state;
    const { login, getPasswordStrength } = this.props;

    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20
        }}
      >
        <h4>
          Auth component (Sign-in/Sign-up flow, will need to have CORs plugin similar to
          <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">
            {" "}this
          </a>)
        </h4>
        <Auth initialDisplayComponent={'login'}/>

        <br/>
        <br/>
        <br/>

        <h4>
          Password Reset
        </h4>
        <Auth initialDisplayComponent={'password_update'}/>

        <br/>
        <br/>
        <br/>

        <h4>
          Setup Authenticator
        </h4>
        <Auth initialDisplayComponent={'authenticator_setup'}/>

        <br/>
        <br/>
        <br/>

        <h4>
          Disable Authenticator
        </h4>
        <Auth initialDisplayComponent={'authenticator_disable'}/>
      </div>
    );
  }
}
export default withAuth(App);