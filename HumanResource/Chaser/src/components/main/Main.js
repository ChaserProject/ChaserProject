import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { SideMenu } from './MainRouter';

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='black' barStyle='light-content' />
                <SideMenu /*setStateLanguage*/ />
            </View>
        );
    }
}

