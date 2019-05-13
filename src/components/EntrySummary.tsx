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
    <div className="entry-summary">
      <div className="entry-summary__date">
        <h3 className="entry-summary__day">{date.getDate()}</h3>
        <p className="entry-summary__month">{getMonthString(date.getMonth())}</p>
      </div>
      <div className="entry-summary__description">
        <h5 className="entry-summary__title">{title}</h5>
        <p className="entry-summary__content">{truncateText(content)}</p>
      </div>
    </div>
  );
};
