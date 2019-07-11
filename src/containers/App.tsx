import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Signup, Login, Page404 } from './';
import '../styles/app.scss';

const Main = lazy(() => import('./Main'));

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact={true} path="/login" component={Login} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact={false} path="/app" component={Main} />
            </Suspense>
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
