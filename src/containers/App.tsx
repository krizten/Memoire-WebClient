import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Signup } from './';
import '../styles/app.scss';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}
