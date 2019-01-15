import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import PrivateRoute from '../components/PrivateRoute/';

import MainPage from './components/MainPage';
import MainAccountPage from './components/MainAccountPage';
import Enable2FA from './components/Enable2FA';
import Disable2FA from './components/Disable2FA';
import PasswordUpdate from './components/PasswordUpdate';


class App extends Component {

  render() {
    return (
      <div className="center w85">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/account" component={MainAccountPage} />
          <Route exact path="/enable2fa" component={Enable2FA} />
          <Route exact path="/disable2fa" component={Disable2FA} />
          <Route exact path="/passwordUpdate" component={PasswordUpdate} />
          <Route exact path="/passwordReset" component={PasswordUpdate} />
        </Switch>
      </div>
    )
  }
}

export default App;