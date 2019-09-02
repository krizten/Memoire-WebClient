import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Footer, InputGroup, Button } from '../components';
import { AppState, ConnectedReduxProps } from '../store';
import { signupUser } from '../store/auth/actions';
import { SignupDTO, User } from '../interfaces';
import logo from '../assets/img/logo+name.png';
import signupImgSrc from '../assets/img/signup.svg';
import { validateEmail } from '../utils';

interface State {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  avatar: string;
  errors?: any;
}

interface PropsFromState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
}

interface PropsFromDispatch {
  signupUser: typeof signupUser;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Signup extends Component<AllProps, State> {
  state: State = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    avatar: 'https://memoire-media.s3.us-east-2.amazonaws.com/avatar/default_user_avatar.png',
    errors: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  componentDidMount() {
    document.title = 'Memoire | Signup';

    if (this.props.isAuthenticated) {
      this.props.history.push('/app/entries');
    }
  }

  onBlur = (e: any) => {
    switch (e.target.name) {
      case 'name':
        if (!e.target.value) {
          this.setState({
            errors: { ...this.state.errors, name: 'Full name should not be empty.' },
          });
        } else {
          this.setState({ errors: { ...this.state.errors, name: '' } });
        }
        break;

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
        } else if (
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword
        ) {
          this.setState({
            errors: {
              ...this.state.errors,
              password: 'Password does not match.',
            },
          });
        } else {
          this.setState({ errors: { ...this.state.errors, password: '' } });
        }
        break;

      case 'confirmPassword':
        if (this.state.password !== this.state.confirmPassword) {
          this.setState({
            errors: {
              ...this.state.errors,
              confirmPassword: 'Password does not match.',
            },
          });
        } else {
          this.setState({ errors: { ...this.state.errors, confirmPassword: '' } });
        }
        break;
    }
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

  checkFormErrors = (): boolean => {
    const { errors } = this.state;
    for (const error of Object.values(errors)) {
      if (error) {
        return false;
      }
    }
    return true;
  };

  onSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, acceptTerms, avatar } = this.state;
    if (name && email && password && confirmPassword && acceptTerms && this.checkFormErrors()) {
      const signupData: SignupDTO = {
        name,
        email,
        password,
        acceptTerms,
        avatar,
      };
      this.props.signupUser(signupData);
    }
  };

  clearForm() {
    this.setState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
      avatar: 'https://memoire-media.s3.us-east-2.amazonaws.com/avatar/default_user_avatar.png',
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    });
  }

  static getDerivedStateFromProps(nextProps: AllProps, prevState: State): State {
    const nextState = {} as State;

    if (nextProps.isAuthenticated) {
      nextProps.history.push('/app/entries');
    }

    return nextState;
  }

  render() {
    const { name, email, password, confirmPassword, acceptTerms, errors } = this.state;

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
            <img src={signupImgSrc} alt="Signup" />
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
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  error={errors.name}
                />
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
                <InputGroup
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Repeat your password"
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  error={errors.confirmPassword}
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
                      processing={this.props.loading}
                      disabled={
                        this.props.loading ||
                        !(
                          name &&
                          email &&
                          password &&
                          confirmPassword &&
                          acceptTerms &&
                          this.checkFormErrors()
                        )
                      }
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

const mapStateToProps = ({ auth: { isAuthenticated, user, loading } }: AppState) => ({
  isAuthenticated,
  user,
  loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signupUser: (payload: SignupDTO) => dispatch(signupUser(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
