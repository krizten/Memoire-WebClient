import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/main.scss';

import { Landing } from './Landing';

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Route exact={true} path="/" component={Landing} />
        </Router>
      </div>
    );
  }
}
