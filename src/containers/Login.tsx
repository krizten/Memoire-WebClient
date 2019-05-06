import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Footer, InputGroup, Button } from '../components';
import '../styles/pages/login.scss';
import logo from '../assets/img/logo+name.png';
import login from '../assets/img/login.svg';

interface State {}

export class Login extends Component<{}, State> {
  render() {
    return <div>Login Component</div>;
  }
}
