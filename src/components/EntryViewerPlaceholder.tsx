import React, { FunctionComponent, MouseEventHandler } from 'react';

import placeholderIcon from '../assets/img/placeholder.svg';
import { Button } from '.';

interface Props {
  onClick: MouseEventHandler<any>;
}

export const EntryViewerPlaceholder: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div className="placeholder">
      <div className="placeholder__image">
        <img src={placeholderIcon} alt="Entry Viewer Placeholder" />
      </div>
      <div className="placeholder__text">
        <h3 className="heading">
          <Button type="button" name="start" text="Create an entry" onClick={onClick} />
        </h3>
        <p className="subheading">
          Search for existing diary entries or simply create a new entry using the button above.
        </p>
      </div>
    </div>
  );
};
