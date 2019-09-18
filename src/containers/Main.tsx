import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Sidenav } from '../components';
import { EditEntry, Profile, Settings } from './';
import { getAllEntries } from '../store/entries/actions';
import Entries from './Entries';
import AddEntry from './AddEntry';

interface Props {
  getAllEntries: typeof getAllEntries;
}

class Main extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.props.getAllEntries();
  }

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
            <Route exact={true} path="/app/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllEntries: () => dispatch(getAllEntries()),
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
