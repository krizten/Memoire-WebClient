import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Signup, Login, Main, Page404 } from './';
import '../styles/app.scss';

export class App extends Component {
  renderMain = () => {
    return <Main />;
  };

  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={false} path="/app" render={this.renderMain} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
