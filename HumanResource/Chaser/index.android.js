
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux/store/Store';

import Main from './src/components/main/Main';


export default class Friendzone extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Friendzone', () => Friendzone);
