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
    </div>
  );
};
