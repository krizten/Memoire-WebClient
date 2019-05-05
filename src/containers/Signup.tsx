import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Footer, InputGroup, Button } from '../components';
import '../styles/pages/signup.scss';
import logo from '../assets/img/logo+name.png';
import signup from '../assets/img/signup-lg.svg';

interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export class Signup extends Component<{}, State> {
  state: State = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    // errors: {},
  };

  onChange = (e: any) => {
    switch (e.target.name) {
      case 'name':
        this.setState({ name: e.target.value });
        break;
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      case 'confirmPassword':
        this.setState({ confirmPassword: e.target.value });
        break;
      case 'acceptTerms':
        this.setState({ acceptTerms: e.target.checked });
        break;
    }
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, password, confirmPassword, acceptTerms } = this.state;

    return (
      <div className="signup">
        <div className="signup-header">
          <Link to="/">
            <div>
              <img className="signup-header__logo" src={logo} alt="Memoire Logo" />
            </div>
          </Link>
        </div>
        <div className="signup-main">
          <div className="signup-main__image">
            <img src={signup} alt="Signup" />
          </div>
          <div className="signup-main__form form">
            <div className="form__header">
              <h3>Sign Up</h3>
              <p>To get started, please complete the sign up form below.</p>
            </div>
            <div className="form__body">
              <form className="register-form" id="register-form" onSubmit={this.onSubmit}>
                <InputGroup
                  label="name"
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  onChange={this.onChange}
                />
                <InputGroup
                  label="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={this.onChange}
                />
                <InputGroup
                  label="password"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <InputGroup
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Repeat your password"
                  onChange={this.onChange}
                />
                <div className="form-group-container">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      className="accept-terms"
                      checked={acceptTerms}
                      onChange={this.onChange}
                    />
                    <label htmlFor="acceptTerms" className="label-accept-terms">
                      <span>
                        <span />
                      </span>
                      I agree with all statements in the{' '}
                      <Link to="/terms-and-conditions">Terms of service</Link>
                    </label>
                  </div>
                </div>
                <div className="form-group-container">
                  <div className="form-group form-button">
                    <Button
                      type="submit"
                      name="signup"
                      text="Register"
                      onClick={this.onSubmit}
                      processing={false}
                      disabled={false}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="form__footer">
              <p>
                Already have an account?
                <Link to="/login">
                  <span>Sign in here</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer className="signup-footer" />
      </div>
    );
  }
}
