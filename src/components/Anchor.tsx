import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
  text: string;
}

export const Anchor: FunctionComponent<Props> = ({ path, text }) => {
  return (
    <Link to={path} className="anchor">
      <div className="anchor__box">
        <p className="anchor__text">{text}</p>
      </div>
    </Link>
  );
};
