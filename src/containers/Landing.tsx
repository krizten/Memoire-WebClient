import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Anchor } from '../components';
import '../styles/pages/landing.scss';
import logo from '../assets/img/logo+name.png';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <Link to="/">
            <div>
              <img className="landing-header__logo" src={logo} alt="Memoire Logo" />
            </div>
          </Link>
          <div className="landing-login">
            <Anchor path="/login" text="Login" />
          </div>
        </div>
        <div className="landing-center">
          <div className="landing-center__message">
            <h1 className="landing-center__headline">Reflect!</h1>
            <p className="landing-center__text">
              Pen down your thoughts and feelings. <span className="italics">Be expressive!</span>
            </p>
          </div>
          <div className="landing-signup">
            <Link to="/signup" className="anchor">
              <div className="anchor__box">
                <p className="anchor__text">
                  <span className="anchor__text--visible">Get Started</span>
                  <span className="anchor__text--invisible">Sign Up!</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="landing-footer">
          <p className="landing-footer__copyright">&copy; Mémoire, 2019</p>
          <div className="landing-footer__corporate">
            <Link to="/terms-and-conditions">
              <p className="landing-footer__corporate-terms">Terms & Conditions</p>
            </Link>
            <Link to="/privacy-policy">
              <p className="landing-footer__corporate-privacy">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
