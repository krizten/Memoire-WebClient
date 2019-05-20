import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Sidenav, EntryEditor } from '../components';
import { Entries, Page404 } from './';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidenav className="main__sidenav" />
        <main className="main__content">
          <Switch>
            <Route exact={true} path="/entries" component={Entries} />
            <Route exact={true} path="/entries/new" component={EntryEditor} />
            <Route component={Page404} />
          </Switch>
        </main>
      </div>
    );
  }
}
