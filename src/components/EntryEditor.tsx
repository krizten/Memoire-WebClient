import React, { Component } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';

import { OutlineButton } from './';
import { LocationSVG } from '../svg';
import { ImageUploader } from './ImageUploader';

interface Props {
  mode: 'new' | 'update';
}

interface State {}

export class EntryEditor extends Component<Props, State> {
  clickBtn = () => {
    toast('😁️ Testing Toast Component', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  render() {
    return (
      <div className="editor">
        <div className="editor__main">
          <div className="editor__controls">
            <OutlineButton onClick={this.clickBtn} type="button">
              <span className="mr-3">Save</span> <i className="fas fa-save" />
            </OutlineButton>
            <ToastContainer closeButton={false} transition={Slide} />
          </div>
          <div className="editor__entry">
            <form action="" className="entry">
              <div className="entry__date-location">
                <p className="entry__date">Thursday, January 22nd, 2019</p>
                <p className="entry__location">
                  <LocationSVG />
                  <span>{'Not Available'}</span>
                </p>
              </div>
              <input className="entry__title" placeholder="Title" />
              <div className="entry__content">
                <textarea
                  className="scrollbar"
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  spellCheck={false}
                  placeholder="Write your thoughts..."
                />
              </div>
            </form>
          </div>
        </div>
        <div className="editor__upload">
          <ImageUploader
            image={`https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
          />
        </div>
      </div>
    );
  }
}
