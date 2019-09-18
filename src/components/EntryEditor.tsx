import React, { Component } from 'react';
import { toast } from 'react-toastify';

import { OutlineButton } from './';
import { LocationSVG } from '../svg';
import { ImageUploader } from './ImageUploader';
import { Header } from './Header';

interface Props {
  mode: 'new' | 'update';
}

interface State {
  title: string;
  content: string;
  image?: string;
}

export class EntryEditor extends Component<Props, State> {
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

  render() {
    const { mode } = this.props;
    const { title, content } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header title={mode === 'new' ? 'Add Entry' : 'Edit Entry'} />
        <div className="editor">
          <div className="editor__main">
            <div className="editor__controls">
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
