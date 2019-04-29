import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/app.scss';

import { Landing, Signup } from './';

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}
