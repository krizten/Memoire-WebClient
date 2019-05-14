import React, { FunctionComponent } from 'react';
import { OutlineButton } from './';

interface Props {}

export const EntryViewer: FunctionComponent<Props> = () => {
  return (
    <div className="viewer">
      <div className="viewer__controls">
        <OutlineButton type="button" actionType="edit" text="Edit" />
        <OutlineButton type="button" actionType="delete" text="Delete" />
      </div>
      <div className="viewer__entry">
        <div className="entry">
          <p className="entry__date">Thursday, January 22nd, 2018</p>
          <h3 className="entry__title">Lorem ipsum dolor</h3>
          <div className="entry__content">
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
