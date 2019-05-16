import React, { FunctionComponent } from 'react';

import { OutlineButton } from './';
import { LocationSVG } from '../svg';
import { IEntry } from '../interfaces';

interface Props {
  entry?: IEntry;
}

export const EntryViewer: FunctionComponent<Props> = () => {
  return (
    <div className="viewer">
      <div className="viewer__controls">
        <OutlineButton type="button" actionType="edit" text="Edit" />
        <OutlineButton type="button" actionType="delete" text="Delete" />
      </div>
      <div className="viewer__entry scrollbar">
        <div className="entry">
          <div className="entry__date-location">
            <p className="entry__date">Thursday, January 22nd, 2019</p>
            <p className="entry__location">
              <LocationSVG />
              <span>Lagos, NG</span>
            </p>
          </div>
          <h3 className="entry__title">Lorem ipsum dolor</h3>
          <div className="entry__content">
            <div className="entry__image">
              <img
                src={`https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus explicabo eveniet
              dolores fugit alias voluptates odit quo voluptate iure molestias necessitatibus
              temporibus ipsam magnam esse eos saepe nobis perferendis officia, pariatur rem est
              quasi, nemo quis! Saepe excepturi pariatur harum temporibus! Assumenda deleniti id
              esse officia impedit ratione soluta?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
