import React, { FunctionComponent } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import { EntriesSVG, UserSVG, SettingsSVG, LogoutSVG } from '../svg';

interface Props {
  className?: string;
}

export const Sidenav: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className ? `${className} sidenav` : 'sidenav'}>
      <div className="sidenav__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidenav__menu">
        <NavLink to="/app/entries" activeClassName="active" className="sidenav__menu-link">
          <div className="sidenav__menu-item">
            <EntriesSVG />
            <p>Entries</p>
          </div>
        </NavLink>
        <NavLink to="/app/profile" activeClassName="active" className="sidenav__menu-link">
          <div className="sidenav__menu-item">
            <UserSVG />
            <p>Profile</p>
          </div>
        </NavLink>
        <NavLink to="/app/settings" activeClassName="active" className="sidenav__menu-link">
          <div className="sidenav__menu-item">
            <SettingsSVG />
            <p>Settings</p>
          </div>
        </NavLink>
        <a className="sidenav__menu-link logout">
          <div className="sidenav__menu-item">
            <LogoutSVG />
            <p>Logout</p>
          </div>
        </a>
      </div>
    </div>
  );
};
