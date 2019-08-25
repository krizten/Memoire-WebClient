import React, { Component, Fragment } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Footer, InputGroup, Button, Modal } from '../components';
import { loginUser } from '../store/auth/actions';
import { User, LoginDTO } from '../interfaces';
import { ConnectedReduxProps, AppState } from '../store';
import logo from '../assets/img/logo+name.png';
import login from '../assets/img/login.svg';
import { validateEmail } from '../utils';

interface State {
  email: string;
  password: string;
  forgotPasswordEmail: string;
  show: boolean;
  errors?: any;
}

interface PropsFromState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

interface PropsFromDispatch {
  loginUser: typeof loginUser;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Login extends Component<AllProps, State> {
  state: State = {
    email: '',
    password: '',
    forgotPasswordEmail: '',
    show: false,
    errors: {
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    document.title = 'Memoire | Login';

    if (this.props.isAuthenticated) {
      this.props.history.push('/app/entries');
    }
  }

  static getDerivedStateFromProps(nextProps: AllProps, prevState: State): State {
    const nextState = {} as State;

    if (nextProps.isAuthenticated) {
      nextProps.history.push('/app/entries');
    }

    return nextState;
  }

  checkFormErrors = (): boolean => {
    const { errors } = this.state;
    for (const error of Object.values(errors)) {
      if (error) {
        return false;
      }
    }
    return true;
  };

  onBlur = (e: any) => {
    switch (e.target.name) {
      case 'email':
        if (!e.target.value) {
          this.setState({ errors: { ...this.state.errors, email: 'Email should not be empty.' } });
        } else if (!validateEmail(e.target.value)) {
          this.setState({ errors: { ...this.state.errors, email: 'Email is not valid.' } });
        } else {
          this.setState({ errors: { ...this.state.errors, email: '' } });
        }
        break;

      case 'password':
        if (!e.target.value) {
          this.setState({
            errors: { ...this.state.errors, password: 'Password should not be empty.' },
          });
        } else if (e.target.value.length > 0 && e.target.value.length < 6) {
          this.setState({
            errors: {
              ...this.state.errors,
              password: 'Password must be longer than or equal to 6 characters.',
            },
          });
        } else {
          this.setState({ errors: { ...this.state.errors, password: '' } });
        }
        break;
    }
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

    const { email, password } = this.state;
    if (email && password && this.checkFormErrors()) {
      this.props.loginUser({ email, password });
    }
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
    const { email, password, forgotPasswordEmail, show, errors } = this.state;

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
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <InputGroup
                    label="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    error={errors.password}
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
                        processing={this.props.loading}
                        disabled={
                          this.props.loading || !(email && password && this.checkFormErrors())
                        }
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

const mapStateToProps = ({ auth: { isAuthenticated, user, loading } }: AppState) => ({
  isAuthenticated,
  user,
  loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUser: (payload: LoginDTO) => dispatch(loginUser(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
