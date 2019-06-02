import React, { FunctionComponent } from 'react';

interface Props {}

export const SecuritySettingsTab: FunctionComponent<Props> = ({}) => {
  return (
    <div className="security-settings">
      <h3 className="security-settings__password-title">Change Password</h3>
      <p className="security-settings__password-text">
        Create your new password using 6 characters or more. It can be any combination of letters,
        numbers, and symbols.
      </p>
      <form className="security-settings__form">
        <div className="security-settings__form-group">
          <h3>Current Password</h3>
          <input type="password" placeholder="***********" />
        </div>
        <div className="security-settings__form-group">
          <h3>New Password</h3>
          <input type="password" placeholder="*********" />
        </div>
        <div className="security-settings__form-group">
          <h3>Confirm Password</h3>
          <input type="password" placeholder="*********" />
        </div>
        <div className="security-settings__form-group">
          <h3 />
          <button type="button">
            <span>Save Changes</span> {!true ? <i className="ml-4 fas fa-spinner fa-spin" /> : null}
          </button>
        </div>
      </form>
    </div>
  );
};
