import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

import { EntrySummary, EntryViewer, Header, Dialog } from '../components';
import { AddSVG } from '../svg';
import { Entry } from '../interfaces';
import { AppState, ConnectedReduxProps } from '../store';
import { getAllEntries, getCurrentEntry, getLoading, getStatus } from '../store/entries/selectors';
import {
  getAllEntries as getAllEntriesAction,
  setCurrentEntry,
  deleteEntry,
} from '../store/entries/actions';
import searchIcon from '../assets/img/search.svg';
import clearIcon from '../assets/img/clear.svg';
import binIcon from '../assets/img/bin.svg';

interface State {
  search: string;
  show: boolean;
}

interface PropsFromState {
  entries: Entry[];
  currentEntry?: Entry;
  loading: boolean;
  status: boolean;
}

interface PropsFromDispatch {
  getAllEntries: typeof getAllEntriesAction;
  setCurrentEntry: typeof setCurrentEntry;
  deleteEntry: typeof deleteEntry;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Entries extends Component<AllProps, State> {
  state: State = {
    search: '',
    show: false,
  };

  componentDidMount() {
    document.title = 'Memoire | Entries';
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
    this.props.setCurrentEntry(entry);
  };

  onEdit = () => {
    const entryId = this.props.currentEntry && this.props.currentEntry.id;
    this.props.history.push(`/app/entries/edit/${entryId}`);
  };

  onDelete = () => {
    if (this.props.currentEntry) {
      this.props.deleteEntry(this.props.currentEntry.id);
    }
    this.setState({ show: false });
  };

  showDeleteDialog = () => {
    this.setState({ show: true });
  };

  hideDeleteDialog = () => {
    this.setState({ show: false });
  };

  render() {
    const { search, show } = this.state;
    const { entries, currentEntry, loading, status } = this.props;
    return (
      <Fragment>
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
              <EntryViewer
                entry={currentEntry}
                placeholderOnClick={this.addEntry}
                editHandler={this.onEdit}
                deleteHandler={this.showDeleteDialog}
              />
            </div>
          </div>
        </div>
        <Dialog
          show={(show && !loading && !status) || (show && status && !loading)}
          title="Delete Entry"
          processing={loading}
          disabled={loading}
          handleClose={this.hideDeleteDialog}
          cancelButtonText="Cancel"
          actionButtonText="Delete"
          actionButtonMethod={this.onDelete}
        >
          <div className="entries__delete-dialog">
            <div>
              <img src={binIcon} alt="Delete entry dialog image" />
            </div>
            <h3>
              This will permanently remove this entry. Press <span>delete</span> to confirm.
            </h3>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ entries }: AppState) => ({
  entries: getAllEntries(entries),
  currentEntry: getCurrentEntry(entries),
  loading: getLoading(entries),
  status: getStatus(entries),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllEntries: () => dispatch(getAllEntriesAction()),
  setCurrentEntry: (payload: Entry) => dispatch(setCurrentEntry(payload)),
  deleteEntry: (payload: string) => dispatch(deleteEntry(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
