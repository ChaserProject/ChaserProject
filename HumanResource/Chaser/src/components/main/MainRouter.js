import React from 'react';
import { TabNavigator, DrawerNavigator, Text } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeRouter from '../home/HomeRouter';
import NotificationRouter from '../notification/NotificationRouter';
import JoinedJobListRouter from '../joined_job_list/JoinedJobListRouter';
import Friend from '../friend/Friend';
import Menu from './Menu';
import Color from '../../content/color/Color';
import { horizontalScale, fontScale } from '../../utillities/Scale';
import Profile from '../profile/Profile';

const { white, brownBlack, brownGray, black } = Color;

export const Tabs = TabNavigator({
    HomeTab: {
        screen: HomeRouter,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="web"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    JoinedJobTab: {
        screen: JoinedJobListRouter,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="playlist-add-check"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    NotificationTab: {
        screen: NotificationRouter,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="public"
                    size={fontScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    }
},
    {
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeTab',
        animationEnabled: false,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            indicatorStyle: {
                display: 'none'
            },
            activeTintColor: white,
            inactiveTintColor: brownGray,
            style: {
                backgroundColor: black
            }
        }
    });

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },
    ProfileScreen: {
        screen: Profile
    }
}, {
        drawerPosition: 'left',
        drawerWidth: horizontalScale(250),
        contentComponent: props => <Menu {...props} />
    });

