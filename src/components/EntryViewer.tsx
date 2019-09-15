import React, { FunctionComponent, Fragment, MouseEventHandler } from 'react';

import { OutlineButton, EntryViewerPlaceholder } from './';
import { LocationSVG } from '../svg';
import { Entry } from '../interfaces';
import { getDayOfTheWeek, getMonthFull, getOrdinalSuffix } from '../utils';

interface Props {
  entry: Entry | null;
  placeholderOnClick: MouseEventHandler<any>;
}

const formatDate = (date: Date) =>
  `${getDayOfTheWeek(date.getDay())}, ${getMonthFull(date.getMonth())} ${getOrdinalSuffix(
    date.getDate()
  )}, ${date.getFullYear()}`;

export const EntryViewer: FunctionComponent<Props> = ({ entry, placeholderOnClick }) => {
  const date = entry ? new Date(entry.created) : new Date();
  return (
    <div className="viewer">
      {entry ? (
        <Fragment>
          <div className="viewer__controls">
            <OutlineButton type="button">
              <span className="mr-3">Edit</span> <i className="fas fa-edit" />
            </OutlineButton>
            <OutlineButton type="button" className="outline-button--danger">
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo
                  eveniet dolores fugit alias voluptates odit quo voluptate iure molestias
                  necessitatibus temporibus ipsam magnam esse eos saepe nobis perferendis officia,
                  pariatur rem est quasi, nemo quis! Saepe excepturi pariatur harum temporibus!
                  Assumenda deleniti id esse officia impedit ratione soluta?
                </p>
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
