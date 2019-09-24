import React, { FunctionComponent, Fragment, MouseEventHandler } from 'react';

import { OutlineButton, EntryViewerPlaceholder } from './';
import { LocationSVG } from '../svg';
import { Entry } from '../interfaces';
import { formatDate } from '../utils';

interface Props {
  entry?: Entry;
  placeholderOnClick: MouseEventHandler<any>;
  editHandler: MouseEventHandler<any>;
  deleteHandler: MouseEventHandler<any>;
}

export const EntryViewer: FunctionComponent<Props> = ({
  entry,
  placeholderOnClick,
  editHandler,
  deleteHandler,
}) => {
  const date = entry ? new Date(entry.created) : new Date();
  return (
    <div className="viewer">
      {entry ? (
        <Fragment>
          <div className="viewer__controls">
            <OutlineButton type="button" onClick={editHandler}>
              <span className="mr-3">Edit</span> <i className="fas fa-edit" />
            </OutlineButton>
            <OutlineButton type="button" className="outline-button--danger" onClick={deleteHandler}>
              <span className="mr-3">Delete</span> <i className="fas fa-trash-alt" />
            </OutlineButton>
          </div>
          <div className="viewer__entry scrollbar">
            <div className="entry">
              <div className="entry__date-location">
                <p className="entry__date">{formatDate(date)}</p>
                <p className="entry__location">
                  <LocationSVG />
                  <span>Lagos, NG</span>
                </p>
              </div>
              <h3 className="entry__title">{entry.title}</h3>
              <div className="entry__content">
                <div className="entry__image">
                  {entry.image ? <img src={`${entry.image}`} alt="" /> : null}
                </div>
                {entry.content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <EntryViewerPlaceholder onClick={placeholderOnClick} />
      )}
    </div>
  );
};
