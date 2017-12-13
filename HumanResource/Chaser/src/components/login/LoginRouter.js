
import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Login from './Login';
import Help from '../help/Help';
import CreateAccount from '../create_account/CreateAccount';
import { SideMenu } from '../../components/main/MainRouter';
import CommonStyle from '../../content/styles/CommonStyle';
import Color from '../../content/color/Color';
import { Languages } from '../../content/languages/Languages';

const { headerNavTitle, headerNav } = CommonStyle;
const { white } = Color;

const LoginStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    },
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: () => ({
            headerTitle: Languages.CreateAccount,
            headerTitleStyle: headerNavTitle,
            headerStyle: headerNav,
            headerTintColor: white,
            headerRight: <Text />,
        })
    },
    Help: {
        screen: Help,
        navigationOptions: () => ({
            headerTitle: Languages.NeedHelp,
            headerStyle: headerNav,
            headerTitleStyle: headerNavTitle,
            headerTintColor: white,
            headerRight: <Text />
        })
    },
    Home: {
        screen: SideMenu,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    }
}, {
        initialRouteName: 'Login'
    });

function mapStateToProps(state) {
    return { lang: state.lang };
}
export default connect(mapStateToProps)(LoginStack);

