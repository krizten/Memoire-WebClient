import React, { Component, Fragment } from 'react';

import { Header } from '../components';

export class Entries extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>Sidebar</div>
          <div>Main Content</div>
        </div>
      </div>
    );
  }
}
