import React, { FunctionComponent } from 'react';

import logo from '../assets/img/logo+name+light.png';
import user from '../assets/img/user.png';
import add from '../assets/img/add.svg';
import search from '../assets/img/search.svg';
import clear from '../assets/img/clear.svg';

interface Props {}

export const Header: FunctionComponent<Props> = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
      <div className="header__right">
        <div className="search-add">
          <div className="header__search">
            <form>
              <button type="submit">
                <img src={search} alt="Search icon" />
              </button>
              <input id="search" name="search" type="text" placeholder="Search Entries..." />
              {!true && (
                <button type="button">
                  <img src={clear} alt="Clear" />
                </button>
              )}
            </form>
          </div>
          <div className="header__add-entry">
            <img src={add} alt="Add Entry" />
          </div>
        </div>
        <div className="header__profile">
          <img className="header__profile-image" src={user} alt="User Photo" />
        </div>
      </div>
    </header>
  );
};

{
  /* <div className="header__logo-search-container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__search">
          <i className="fas fa-search" />
          <input type="text" placeholder="Search Entries" />
        </div>
      </div>
      <div>Profile</div> */
}
