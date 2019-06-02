import React, { Component } from 'react';
import { Header, EntrySettingsTab, SecuritySettingsTab } from '../components';

interface Props {}

interface State {
  isEntryTab: boolean;
}

export class Settings extends Component<Props, State> {
  state: State = {
    isEntryTab: true,
  };

  changeToEntryTab = () => {
    this.setState({
      isEntryTab: true,
    });
  };

  changeToSecurityTab = () => {
    this.setState({
      isEntryTab: false,
    });
  };

  render() {
    const { isEntryTab } = this.state;
    return (
      <div className="settings">
        <Header title="Settings" />
        <div className="settings__main">
          <div className="settings__nav">
            <button
              onClick={this.changeToEntryTab}
              type="button"
              className={
                isEntryTab
                  ? 'settings__nav-item settings__nav-item--selected'
                  : 'settings__nav-item'
              }
            >
              <p>Entries</p>
            </button>
            <button
              onClick={this.changeToSecurityTab}
              type="button"
              className={
                !isEntryTab
                  ? 'settings__nav-item settings__nav-item--selected'
                  : 'settings__nav-item'
              }
            >
              <p>Security</p>
            </button>
          </div>
          <div className="settings__content">
            {isEntryTab ? <EntrySettingsTab /> : <SecuritySettingsTab />}
          </div>
        </div>
      </div>
    );
  }
}
