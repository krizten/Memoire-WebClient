import React, { FunctionComponent } from 'react';
import { getMonthString, truncateText } from '../utils';

interface Props {
  key: number;
  date: Date;
  title: string;
  content: string;
  selected?: boolean;
}

export const EntrySummary: FunctionComponent<Props> = ({ date, title, content }) => {
  return (
    <div className="summary">
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
