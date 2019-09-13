import React, { FunctionComponent, MouseEventHandler } from 'react';
import { getMonthString, truncateText } from '../utils';

interface Props {
  key: number | string;
  date: Date;
  title: string;
  content: string;
  selected?: boolean;
  onClick: MouseEventHandler<any>;
}

export const EntrySummary: FunctionComponent<Props> = ({ date, title, content, onClick }) => {
  return (
    <div className="summary" onClick={onClick}>
      <div className="summary__date">
        <h3 className="summary__day">{date.getDate()}</h3>
        <p className="summary__month">{getMonthString(date.getMonth())}</p>
      </div>
      <div className="summary__description">
        <h5 className="summary__title">{title}</h5>
        <p className="summary__content">{truncateText(content)}</p>
      </div>
    </div>
  );
};
