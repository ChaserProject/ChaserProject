
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/components/main/Main';

export default class Friendzone extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Friendzone', () => Friendzone);
