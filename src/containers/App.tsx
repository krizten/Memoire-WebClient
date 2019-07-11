import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Login, Page404, Main } from './';
import Signup from './Signup';
import '../styles/app.scss';
import { PrivateRoute } from '../components';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact={true} path="/login" component={Login} />
            <PrivateRoute isAuthenticated={false} exact={false} path="/app" component={Main} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
