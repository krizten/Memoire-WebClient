import React, { FunctionComponent } from 'react';
import pdf from '../assets/img/pdf.svg';
import json from '../assets/img/json.svg';

interface Props {}

export const EntrySettingsTab: FunctionComponent<Props> = ({}) => {
  return (
    <div className="entry-settings">
      <div className="entry-settings__export">
        <h3 className="entry-settings__export-title">Export Entries</h3>
        <p className="entry-settings__export-text">
          Export all entries to either a PDF (Portable Document Format) or JSON (JavaScript Object
          Notation) format.
        </p>
        <div className="entry-settings__export-icon-group">
          <a className="entry-settings__export-icon" title="Export to PDF">
            <img src={pdf} alt="PDF" />
          </a>
          <a className="entry-settings__export-icon" title="Export to JSON">
            <img src={json} alt="JSON" />
          </a>
        </div>
      </div>
      <div className="entry-settings__clear">
        <h3 className="entry-settings__clear-title">Clear Entries</h3>
        <p className="entry-settings__clear-text">Clear all entries saved till date.</p>
      </div>
      <form className="entry-settings__clear-form">
        <input type="password" placeholder="Your Password" />
        <button type="button">
          <span>Clear</span> {!true ? <i className="ml-4 fas fa-spinner fa-spin" /> : null}
        </button>
      </form>
    </div>
  );
};
