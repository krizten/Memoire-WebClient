import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

export const Header: FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="header">
      <i className="fas fa-th-large mr-4" />
      <span>{title}</span>
    </div>
  );
};
