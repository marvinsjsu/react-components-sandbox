import React, { Component } from 'react';
import { Auth } from 'react-components';
import { Redirect } from 'react-router-dom';
import { PASSWORD_REDIRECT } from '../../utils/constants';

import '../../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'authenticator_disable',
    };

    this.onClick = this.onClick.bind(this);
    this.successCB = this.successCB.bind(this);
    this.doneCB = this.doneCB.bind(this);
    this.cancelCB = this.cancelCB.bind(this);
  }

  onClick(display) {
    console.log('display: ', display);
    this.setState({
      display: display
    });
  }

  successCB() {
    this.setState({
      display: 'account'
    });
  }

  doneCB() {
    this.setState({
      display: 'account',
    });
  }

  cancelCB() {
    this.setState({
      display: 'account',
    });
  }

  render() {

    const { display } = this.state;
    const { login, getPasswordStrength } = this.props;

    if (display === 'account') {
      return (
        <Redirect to='/account'/>
      );
    }

    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Auth
          initialDisplayComponent={'authenticator_disable'}
          passwordResetRedirect={PASSWORD_REDIRECT}
          successCB={this.successCB}
          onClickDone={this.doneCB}
          onClickCancel={this.cancelCB}
        />
      </div>
    );
  }
}
export default App;
