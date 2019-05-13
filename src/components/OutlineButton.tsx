import { FunctionComponent } from 'react';
import { SaveSVG, EditSVG, CancelSVG, DeleteSVG } from '../svg';

interface Props {
  type: 'button' | 'submit' | 'reset';
  actionType: 'save' | 'edit' | 'cancel' | 'delete';
  text: string;
}

export const OutlineButton: FunctionComponent<Props> = ({ actionType, type, text }) => {
  return <button type={type}>{text} </button>;
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
