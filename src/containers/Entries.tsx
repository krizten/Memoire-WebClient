import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

import { EntrySummary, EntryViewer, Header } from '../components';
import { AddSVG } from '../svg';
import { Entry } from '../interfaces';
import { AppState, ConnectedReduxProps } from '../store';
import { getAllEntries } from '../store/entries/selectors';
import search from '../assets/img/search.svg';
import clear from '../assets/img/clear.svg';

interface State {
  entries: Entry[];
}

interface PropsFromState {
  entries: Entry[];
}

interface PropsFromDispatch {
  //
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Entries extends Component<AllProps> {
  state: State = {
    entries: [],
  };

  componentDidMount() {
    console.log(this.props.entries);
  }

  sample = () => {
    let group = [];
    for (let index = 0; index < 50; index++) {
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

  addEntry = () => {
    this.props.history.push('/app/entries/new');
  };

  render() {
    const { entries } = this.props;
    return (
      <div className="entries">
        <Header title="Entries" />
        <div className="entries__main">
          <div className="entries__content">
            <div className="entries__search-container">
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
              <div className="entries__add" onClick={this.addEntry}>
                <AddSVG />
              </div>
            </div>
            <div className="entries__list">{this.sample()}</div>
          </div>

          <div className="entries__viewer">
            <EntryViewer />
          </div>

          {/* <div>
            {entries.length > 0 ? (
              <div className="entries__list scrollbar">
                {entries.map((entry: Entry, index: number) => (
                  <EntrySummary
                    key={index}
                    date={new Date(`${entry.created}`)}
                    title={entry.title}
                    content={entry.content}
                  />
                ))}
              </div>
            ) : (
              <div className="entries__list entries_list--empty">
                <p>No Entries</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entries }: AppState) => ({
  entries: getAllEntries(entries),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
