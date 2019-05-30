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
            <Route exact={true} path="/app/entries" component={Entries} />
            <Route exact={true} path="/app/entries/new" component={AddEntry} />
            <Route exact={true} path="/app/entries/edit/:id" component={EditEntry} />
            <Route exact={true} path="/app/profile" component={Profile} />
            {/* <Route exact={true} path="/settings" component={Settings} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}
