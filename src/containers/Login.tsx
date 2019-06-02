import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Footer, InputGroup, Button, Modal } from '../components';
import logo from '../assets/img/logo+name.png';
import login from '../assets/img/login.svg';

interface State {
  email: string;
  password: string;
  forgotPasswordEmail: string;
  show: boolean;
}

export class Login extends Component<{ history: any }, State> {
  state: State = {
    email: '',
    password: '',
    forgotPasswordEmail: '',
    show: false,
  };

  onChange = (e: any) => {
    switch (e.target.name) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
    }
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.history.push('/app/entries');
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  forgotPasswordOnChange = (e: any) => {
    this.setState({
      forgotPasswordEmail: e.target.value,
    });
  };

  forgotPasswordSubmit = (e: any) => {
    e.preventDefault();
  };

  render() {
    const { email, password, forgotPasswordEmail, show } = this.state;

    return (
      <Fragment>
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
                <form className="login-form" id="login-form" onSubmit={this.onSubmit}>
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
                    <p onClick={this.showModal} className="forgot-password">
                      Forgot password?
                    </p>
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
        <Modal
          show={show}
          handleClose={this.hideModal}
          type="email"
          name="email"
          id="forgotPassword"
          placeholder="Your Email"
          modalTitle="Forgot Password?"
          instruction="Enter your email to initiate password reset process."
          value={forgotPasswordEmail}
          actionButtonText="Reset"
          actionButtonMethod={this.forgotPasswordSubmit}
          onChange={this.forgotPasswordOnChange}
          processing={true}
        />
      </Fragment>
    );
  }
}
