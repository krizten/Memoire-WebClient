import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

import { setInitialUser } from '../store/auth/actions';
import { store } from '../';
import { Page404, Main } from './';
import Signup from './Signup';
import Login from './Login';
import Landing from './Landing';
import PrivateRoute from './PrivateRoute';
import '../styles/app.scss';

export class App extends Component {
  constructor(props: any) {
    super(props);

    if (window.localStorage) {
      const token = localStorage.getItem('user_access');
      token && store.dispatch(setInitialUser(token));
    }
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/signup" component={Signup} />
            <Route exact={true} path="/login" component={Login} />
            <PrivateRoute exact={false} path="/app" component={Main} />
            <Route component={Page404} />
          </Switch>
        </div>
        <ToastContainer closeButton={false} transition={Slide} />
      </Router>
    );
  }
}
