import React, { Component } from 'react';
import { EntryEditor } from '../components';

interface Props {}

interface State {}

export class EditEntry extends Component<Props, State> {
  render() {
    return <EntryEditor mode="update" />;
  }
}
