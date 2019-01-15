import React, { Component } from 'react';
import { Auth } from 'react-components';
import { Redirect, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { PASSWORD_REDIRECT } from '../../utils/constants';

import '../../App.css';

class App extends Component {

  state = {
    redirect: false,
    user: null,
  }

  componentDidMount() {

    const cookies = new Cookies();
    const accessToken = cookies.get('access_token');
    const user = cookies.get('user');
    const userId = cookies.get('user_id');

    if (!accessToken) {
      this.setState({
        redirect: true,
      });
    } else {
      this.setState({
        user: user,
      });
    }
  }

  successCB = () => {
    this.setState({
      redirect: true,
    });
  }


  render() {
    const { redirect, user } = this.state;

    if (redirect) {
      return (
        <Redirect to='/'/>
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
        <h4>Account Page - user id: {user && user.id}</h4>
        <ul>
          <li><Link to='/enable2fa'>Enable Authentication</Link></li>
          <li><Link to='/disable2fa'>Disable Authentication</Link></li>
          <li><Link to='/passwordUpdate'>Password Update</Link></li>
        </ul>
        <Auth
          initialDisplayComponent={'logout'}
          successCB={this.successCB}
          passwordResetRedirect={PASSWORD_REDIRECT}
        />
      </div>
    );
  }
}
export default App;
