import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Anchor, Footer } from '../components';
import logo from '../assets/img/logo+name.png';
import { store } from '..';
import { connect } from 'react-redux';
import { AppState, ConnectedReduxProps } from '../store';

interface State {}

type AllProps = { isAuthenticated: boolean } & RouteComponentProps<{}> & ConnectedReduxProps;

class Landing extends Component<AllProps, State> {
  state: State = {};

  componentDidMount() {
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
        <Footer className="landing-footer" />
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }: AppState) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
