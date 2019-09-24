import React, { Component } from 'react';

import { OutlineButton, Header } from '../components';
import { LocationSVG } from '../svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EntryDTO, Entry } from '../interfaces';
import { editEntry, setCurrentEntry } from '../store/entries/actions';
import { AppState, ConnectedReduxProps } from '../store';
import { getLoading, getCurrentEntry, getStatus } from '../store/entries/selectors';
import { RouteComponentProps } from 'react-router';
import { formatDate } from '../utils';

interface State {
  title: string;
  content: string;
  image?: string;
  date: Date;
}

interface PropsFromState {
  loading?: boolean;
  status: boolean;
  currentEntry?: Entry;
}

interface PropsFromDispatch {
  editEntry: typeof editEntry;
  setCurrentEntry: typeof setCurrentEntry;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class EditEntry extends Component<AllProps, State> {
  state: State = {
    title: this.props.currentEntry ? this.props.currentEntry.title : '',
    content: this.props.currentEntry
      ? this.props.currentEntry.content.replace(/\n/g, '\n\n').trim()
      : '',
    date: this.props.currentEntry ? new Date(this.props.currentEntry.created) : new Date(),
  };

  static getDerivedStateFromProps(nextProps: AllProps, prevState: State): State {
    const nextState = {} as State;

    if (nextProps.status) {
      if (nextProps.currentEntry) {
        const { currentEntry } = nextProps;
        const { title, content } = prevState;
        const entry: Entry = { ...currentEntry, title, content };
        nextProps.setCurrentEntry(entry);
      }
      nextProps.history.push('/app/entries');
    }

    return nextState;
  }

  onChange = (e: any) => {
    switch (e.target.name) {
      case 'title':
        this.setState({ title: e.target.value });
        break;
      case 'content':
        this.setState({ content: e.target.value });
        break;
    }
  };

  componentDidMount() {
    document.title = 'Memoire | Edit Entry';
  }

  onSubmit = (e: any) => {
    e.preventDefault();
  };

  onUpdate = (e: any) => {
    const { id } = this.props.match.params as any;
    const entry: Partial<EntryDTO> = {
      title: this.state.title,
      content: this.state.content.replace(/\n{1,}\s*?\n{1,}/g, '\n').trim(),
    };
    this.props.editEntry({ id, data: entry });
  };

  goToEntries = () => {
    this.props.history.push('/app/entries');
  };

  render() {
    const { title, content, date } = this.state;
    const { loading } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header title="Edit Entry" />
        <div className="editor">
          <div className="editor__main">
            <div className="editor__controls">
              <OutlineButton
                type="button"
                className="outline-button--secondary px-4"
                onClick={this.goToEntries}
                disabled={loading}
              >
                <i className="fas fa-arrow-circle-left" />
                <span className="ml-3">Back</span>
              </OutlineButton>
              <OutlineButton
                type="button"
                onClick={this.onUpdate}
                disabled={loading || !(title && content)}
              >
                <span className="mr-3">Update</span>{' '}
                <i className={loading ? 'fas fa-spinner fa-spin' : 'fas fa-save'} />
              </OutlineButton>
            </div>
            <div className="editor__entry">
              <form onSubmit={this.onSubmit} className="entry">
                <div className="entry__date-location">
                  <p className="entry__date">{formatDate(date)}</p>
                  <p className="entry__location">
                    <LocationSVG />
                    <span>{'Not Available'}</span>
                  </p>
                </div>
                <input
                  type="text"
                  name="title"
                  className="entry__title"
                  placeholder="Title"
                  autoComplete="off"
                  value={title}
                  onChange={this.onChange}
                />
                <div className="entry__content">
                  <textarea
                    className="scrollbar"
                    name="content"
                    cols={30}
                    rows={10}
                    spellCheck={false}
                    placeholder="Write your thoughts..."
                    value={content}
                    onChange={this.onChange}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <div className="editor__upload">
            TO-DO: Enable Image Upload feature
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entries }: AppState) => ({
  loading: getLoading(entries),
  status: getStatus(entries),
  currentEntry: getCurrentEntry(entries),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editEntry: (payload: { id: string; data: Partial<EntryDTO> }) => dispatch(editEntry(payload)),
  setCurrentEntry: (payload: Entry) => dispatch(setCurrentEntry(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry);
