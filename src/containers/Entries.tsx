import React, { Component } from 'react';

import search from '../assets/img/search.svg';
import clear from '../assets/img/clear.svg';
import add from '../assets/img/add.svg';
import { EntrySummary, EntryViewer } from '../components';

interface State {}

export class Entries extends Component<{}, State> {
  sample = () => {
    let group = [];
    for (let index = 0; index < 20; index++) {
      group.push(
        <EntrySummary
          key={index}
          date={new Date('2018-01-22T03:24:00')}
          title="Lorem ipsum dolor sit amet."
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia temporibus atque fuga maxime recusandae ex voluptate ad nobis ipsamrofeds..."
        />
      );
    }
    return group;
  };

  render() {
    return (
      <div className="entries">
        <div className="entries__header">
          <div className="entries__search">
            <form>
              <button type="submit">
                <img src={search} alt="Search icon" />
              </button>
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search Entries..."
                autoComplete="off"
              />
              {!true && (
                <button type="button">
                  <img src={clear} alt="Clear" />
                </button>
              )}
            </form>
          </div>
          <div className="entries__add">
            <img src={add} alt="Add Entry" />
          </div>
        </div>
        <div className="entries__main">
          <div className="entries__list">{this.sample()}</div>
          <div className="entries__viewer">
            <EntryViewer />
          </div>
        </div>
      </div>
    );
  }
}
