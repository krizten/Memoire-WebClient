import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Sidenav } from '../components';
import { Profile, Settings } from './';
import { getAllEntries } from '../store/entries/actions';
import Entries from './Entries';
import AddEntry from './AddEntry';
import EditEntry from './EditEntry';
import { routes } from '../constants';

interface Props {
  getAllEntries: typeof getAllEntries;
}

class Main extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props.getAllEntries();
  }

  render() {
    return (
      <div className="main">
        <Sidenav className="main__sidenav" />
        <main className="main__content">
          <Switch>
            <Route exact={true} path={routes.entries} component={Entries} />
            <Route exact={true} path={routes.newEntry} component={AddEntry} />
            <Route exact={true} path={routes.editEntry} component={EditEntry} />
            <Route exact={true} path={routes.profile} component={Profile} />
            <Route exact={true} path={routes.settings} component={Settings} />
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
