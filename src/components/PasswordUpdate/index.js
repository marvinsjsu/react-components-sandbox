import React, { Component } from 'react';
import { Auth } from 'react-components';
import { withRouter, Redirect } from 'react-router-dom';
import qs from 'qs';
import '../../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'authenticator_disable',
      token: null,
    };

    this.onClick = this.onClick.bind(this);
    this.successCB = this.successCB.bind(this);
  }

  componentDidMount() {

    const { location } = this.props;

    console.log('PasswordUpdate.componentDidMount.location: ', location);


    if (location && location.pathname === '/passwordReset') {
      if (location.search) {
        console.log('componentDidMount.location: ', location);
        const parsed = qs.parse(location.search.slice(1));

        this.setState({
          token: parsed.token
        });
      }
    }
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
          padding: 20
        }}
      >

        <Auth
          initialDisplayComponent={'password_update'}
          passwordResetRedirect={'http://marvin.playground.s3-website-us-west-2.amazonaws.com/passwordReset'}
          token={this.state.token}
          successCB={this.successCB}
        />
      </div>
    );
  }
}
export default withRouter(App);
