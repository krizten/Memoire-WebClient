import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Footer, Anchor } from '../components';
import '../styles/pages/404.scss';
import logo from '../assets/img/logo+name.png';
import img404 from '../assets/img/not-found.svg';

export class Page404 extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="not-found-header">
          <Link to="/">
            <div>
              <img className="not-found-header__logo" src={logo} alt="Memoire Logo" />
            </div>
          </Link>
        </div>
        <div className="not-found-main">
          <div className="not-found-main__image">
            <img src={img404} alt="404 image" />
          </div>
          <div className="not-found-main__info">
            <h3>Page Not Found</h3>
            <p>The page you're looking for does not exist or has been removed.</p>
          </div>
          <div className="not-found-main__home">
            <Link to="/" className="anchor">
              <div className="anchor__box">
                <p className="anchor__text">
                  <span>Home</span>
                  <span className="anchor__icon">
                    <i className="fas fa-home" />
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Footer className="not-found-footer" />
      </div>
    );
  }
}
