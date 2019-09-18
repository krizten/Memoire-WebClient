import React, { Component } from 'react';

import { OutlineButton } from './';
import { LocationSVG } from '../svg';
import { Header } from './Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EntryDTO } from '../interfaces';
import { addEntry } from '../store/entries/actions';
import { AppState, ConnectedReduxProps } from '../store';
import { getLoading } from '../store/entries/selectors';
import { RouteComponentProps } from 'react-router';

interface Props {
  mode: 'new' | 'update';
}

interface State {
  title: string;
  content: string;
  image?: string;
}

interface PropsFromState {
  loading?: boolean;
}

interface PropsFromDispatch {
  addEntry?: typeof addEntry;
}

type AllProps = Props & PropsFromState & PropsFromDispatch;
// RouteComponentProps<{}> &
// ConnectedReduxProps;

class EntryEditor extends Component<AllProps, State> {
  state: State = {
    title: '',
    content: '',
  };

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

  onSubmit = (e: any) => {
    e.preventDefault();
  };

  onSave = (e: any) => {
    const entry: State = {
      title: this.state.title,
      content: this.state.content.replace(/\n{1,}\s*?\n{1,}/g, '\n').trim(),
    };
  };

  handleBack = () => {};

  render() {
    const { mode } = this.props;
    const { title, content } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header title={mode === 'new' ? 'Add Entry' : 'Edit Entry'} />
        <div className="editor">
          <div className="editor__main">
            <div className="editor__controls">
              <OutlineButton type="button" className="outline-button--secondary px-4">
                <i className="fas fa-arrow-circle-left" />
                <span className="ml-3">Back</span>
              </OutlineButton>
              <OutlineButton type="button" onClick={this.onSave}>
                <span className="mr-3">Save</span> <i className="fas fa-save" />
              </OutlineButton>
            </div>
            <div className="editor__entry">
              <form onSubmit={this.onSubmit} className="entry">
                <div className="entry__date-location">
                  <p className="entry__date">Thursday, January 22nd, 2019</p>
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
          {/* TO-DO: Enable Image Upload feature */}
          {/* <div className="editor__upload">
            <ImageUploader
              image={`https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entries }: AppState) => ({
  isLoading: getLoading(entries),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addEntry: (payload: EntryDTO) => dispatch(addEntry(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryEditor);
