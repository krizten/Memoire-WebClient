import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

import { EntrySummary, EntryViewer, Header } from '../components';
import { AddSVG } from '../svg';
import { Entry } from '../interfaces';
import { AppState, ConnectedReduxProps } from '../store';
import { getAllEntries } from '../store/entries/selectors';
import { getAllEntries as getAllEntriesAction } from '../store/entries/actions';
import searchIcon from '../assets/img/search.svg';
import clearIcon from '../assets/img/clear.svg';

interface State {
  search: string;
}

interface PropsFromState {
  entries: Entry[];
}

interface PropsFromDispatch {
  getAllEntries: typeof getAllEntriesAction;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Entries extends Component<AllProps, State> {
  state: State = {
    search: '',
  };

  componentDidMount() {
    this.props.getAllEntries();
  }

  addEntry = () => {
    this.props.history.push('/app/entries/new');
  };

  onSearch = (e: any) => {
    e.preventDefault();
  };

  onChange = (e: any) => {
    this.setState({
      search: e.target.value,
    });
  };

  clearSearch = () => {
    this.setState({
      search: '',
    });
  };

  selectEntry = (entry: Entry) => {
    console.log(entry);
  };

  render() {
    const { search } = this.state;
    const { entries } = this.props;
    return (
      <div className="entries">
        <Header title="Entries" />
        <div className="entries__main">
          <div className="entries__content">
            <div className="entries__search-container">
              <div className="entries__search">
                <form onSubmit={this.onSearch}>
                  <button type="submit">
                    <img src={searchIcon} alt="Search icon" />
                  </button>
                  <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search Entries..."
                    autoComplete="off"
                    onChange={this.onChange}
                    value={search}
                  />
                  {search && (
                    <button type="button" onClick={this.clearSearch}>
                      <img src={clearIcon} alt="Clear" />
                    </button>
                  )}
                </form>
              </div>
              <div className="entries__add" onClick={this.addEntry}>
                <AddSVG />
              </div>
            </div>
            {entries.length > 0 ? (
              <div className="entries__list scrollbar">
                {entries
                  .filter((entry: Entry) =>
                    entry.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .sort((a, b) => {
                    const aDate = new Date(a.updated);
                    const bDate = new Date(b.updated);
                    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
                  })
                  .map((entry: Entry) => (
                    <EntrySummary
                      key={entry.id}
                      date={new Date(entry.updated)}
                      title={entry.title}
                      content={entry.content}
                      onClick={() => this.selectEntry(entry)}
                    />
                  ))}
              </div>
            ) : (
              <div className="no-entries">No Entries</div>
            )}
          </div>

          <div className="entries__viewer">
            <EntryViewer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entries }: AppState) => ({
  entries: getAllEntries(entries),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllEntries: () => dispatch(getAllEntriesAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
