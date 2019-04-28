import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/signup.scss';
import signup from '../assets/img/test-2.svg';

export class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="signup-header" />
        <div className="signup-main">
          <div className="signup-main__image">
            <img src={signup} alt="Signup" />
          </div>
          <div className="signup-main__form" />
        </div>
        <div className="signup-footer">
          {/* <p className="landing-footer__copyright">&copy; Mémoire, 2019</p>
          <div className="landing-footer__corporate">
            <Link to="/terms-and-conditions">
              <p className="landing-footer__corporate-terms">Terms & Conditions</p>
            </Link>
            <Link to="/privacy-policy">
              <p className="landing-footer__corporate-privacy">Privacy Policy</p>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}
