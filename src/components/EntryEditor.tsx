import React, { Component } from 'react';
import { OutlineButton } from './';
import { LocationSVG } from '../svg';

interface State {}

export class EntryEditor extends Component<{}, State> {
  render() {
    return (
      <div className="editor">
        <div className="editor__main">
          <div className="editor__controls">
            <OutlineButton type="button" actionType="save" text="Save" />
            <OutlineButton type="button" actionType="cancel" text="Cancel" />
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
                <div className="entry__image">
                  {/* <img
                    src={`https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                    alt=""
                  /> */}
                </div>
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
          <div className="editor__upload-image">Add Image</div>
          <div className="editor__upload-location">Add Location</div>
        </div>
      </div>
    );
  }
}
