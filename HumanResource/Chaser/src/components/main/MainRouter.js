import React from 'react';
import { TabNavigator, DrawerNavigator, Textm, StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeRouter from '../home/HomeRouter';
import LoginRouter from '../login/LoginRouter';
import NotificationRouter from '../notification/NotificationRouter';
import JoinedJobListRouter from '../joined_job_list/JoinedJobListRouter';
import Friend from '../friend/Friend';
import Menu from './Menu';
import Color from '../../content/color/Color';
import { horizontalScale, fontScale } from '../../utillities/Scale';
import Profile from '../profile/Profile';
import Job from '../job/Job';
import JobTopBarTitle from '../job/JobTopBarTitle';
import JobTopBarRight from '../job/JobTopBarRight';
import BadgeTabIcon from '../badge/BadgeTabIcon';
import ProfileRouter from '../profile/ProfileRouter';
import UserJoinedJobFilter from '../users_joined_job_filter/UserJoinedJobFilter';


const { white, brownBlack, brownGray, black } = Color;

export const Tabs = TabNavigator({
    HomeTab: {
        screen: HomeRouter,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="web"
                    size={horizontalScale(24)}
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
                    size={horizontalScale(24)}
                    style={{ color: tintColor }}
                />
            )
        })
    },
    NotificationTab: {
        screen: NotificationRouter,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <BadgeTabIcon tintColor={tintColor} />
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

export const TabbarRouter = StackNavigator({
    TabbarScreen: {
        screen: Tabs,
        navigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    },
    JobSreen: {
        screen: Job,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <JobTopBarTitle />,
            headerStyle: {
                backgroundColor: black,
                shadowColor: black,
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
            },
            headerRight: <JobTopBarRight navigation={navigation} />,
            headerTintColor: white
        })
    },
    UserJoinedJobFilterSreen: {
        screen: UserJoinedJobFilter,
        navigationOptions: ({ navigation }) => ({
            headerTitle:'Người tham gia',
            headerStyle: {
                backgroundColor: black,
                shadowColor: black,
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
            },
            headerTintColor: white
        })
    },
    ProfileScreen: {
        screen: ProfileRouter,
        navigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    },
    LoginSreen: {
        screen: LoginRouter,
        navigationOptions: ({navigation})=>({
            headerStyle: {
                display: 'none'
            }
        })
    }
}, {
        initialRouteName: 'TabbarScreen'
    });

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: TabbarRouter
    }
}, {
        drawerPosition: 'left',
        drawerWidth: horizontalScale(250),
        contentComponent: props => <Menu {...props} />
    });

