import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Signup, Login, Entries, Page404 } from './';
import '../styles/app.scss';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/entries" component={Entries} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
