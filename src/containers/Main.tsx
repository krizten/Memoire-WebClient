import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Sidenav } from '../components';
import { Entries, Page404, AddEntry, EditEntry, Profile } from './';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidenav className="main__sidenav" />
        <main className="main__content">
          <Switch>
            <Route exact={true} path="/entries" component={Entries} />
            <Route exact={true} path="/entries/new" component={AddEntry} />
            <Route exact={true} path="/entries/edit/:id" component={EditEntry} />
            <Route exact={true} path="/profile" component={Profile} />
            <Route component={Page404} />
          </Switch>
        </main>
      </div>
    );
  }
}
