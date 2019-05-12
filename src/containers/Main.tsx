import React, { Component } from 'react';

import { Header, Sidenav } from '../components';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidenav className="main__sidenav" />
        <main className="main__content">Main Content</main>
      </div>
    );
  }
}
