import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Footer, InputGroup, Button } from '../components';
import '../styles/pages/login.scss';
import logo from '../assets/img/logo+name.png';
import login from '../assets/img/login.svg';

interface State {
  email: string;
  password: string;
}

export class Login extends Component<{}, State> {
  state: State = {
    email: '',
    password: '',
  };

  onChange = (e: any) => {};

  onSubmit = (e: any) => {};

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <div className="login-header">
          <Link to="/">
            <div>
              <img className="login-header__logo" src={logo} alt="Memoire Logo" />
            </div>
          </Link>
        </div>
        <div className="login-main">
          <div className="login-main__image">
            <img src={login} alt="Login" />
          </div>
          <div className="login-main__form form">
            <div className="form__header">
              <h3>Sign In</h3>
              <p>Welcome back, please sign in to continue using Mémoire.</p>
            </div>
            <div className="form__body">
              <form className="register-form" id="register-form" onSubmit={this.onSubmit}>
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
                <div className="form-group-container">
                  <p className="forgot-password">Forgot password?</p>
                </div>
                <div className="form-group-container">
                  <div className="form-group form-button">
                    <Button
                      type="submit"
                      name="login"
                      text="Login"
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
                Don’t have an account?
                <Link to="/signup">
                  <span>Sign up here</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer className="login-footer" />
      </div>
    );
  }
}
