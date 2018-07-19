
import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Help from '../help/Help';
import CreateAccount from '../create_account/CreateAccount';
import CommonStyle from '../../content/styles/CommonStyle';
import Color from '../../content/color/Color';

const { headerNavTitle, headerNav } = CommonStyle;
const { white } = Color;

const LoginRouter = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                display: 'none'
            }
        })
    },
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: () => ({
            headerTitle: 'Tao tai khoan',
            headerTitleStyle: headerNavTitle,
            headerStyle: headerNav,
            headerTintColor: white,
            headerRight: <Text />,
        })
    },
    Help: {
        screen: Help,
        navigationOptions: () => ({
            headerTitle: 'Can Tro giup?',
            headerStyle: headerNav,
            headerTitleStyle: headerNavTitle,
            headerTintColor: white,
            headerRight: <Text />
        })
    }
}, {
        initialRouteName: 'Login'
    });

export default LoginRouter;

