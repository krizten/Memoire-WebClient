import React, { FunctionComponent, MouseEventHandler } from 'react';
import { SaveSVG, EditSVG, CancelSVG, DeleteSVG } from '../svg';

interface Props {
  type: 'button' | 'submit' | 'reset';
  actionType: 'save' | 'edit' | 'cancel' | 'delete';
  onClick?: MouseEventHandler<any>;
  text: string;
}

export const OutlineButton: FunctionComponent<Props> = ({ actionType, type, text }) => {
  return (
    <button className="outline-button" type={type}>
      <span>{text}</span> {getIcon(actionType)}
    </button>
  );
};

const getIcon = (type: string) => {
  switch (type) {
    case 'save':
      return <SaveSVG />;
    case 'edit':
      return <EditSVG />;
    case 'cancel':
      return <CancelSVG />;
    case 'delete':
      return <DeleteSVG />;
  }
};
