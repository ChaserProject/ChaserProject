
import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserInfoEditing from './user_info_editing/UserInfoEditing';
import UserMessage from './user_message/UserMessage';
import UserPhoto from './user_photo/UserPhoto';
import Profile from './Profile';
import CommonStyle from '../../content/styles/CommonStyle';
import Color from '../../content/color/Color';

const { headerNavTitle, headerNav } = CommonStyle;
const { white } = Color;

const ProfileRouter = StackNavigator({
      ProfileScreen: {
        screen: Profile,
        navigationOptions: () => ({
            headerStyle: {
                display: 'none'
            }
        })
    },
    UserInfoEditingScreen: {
        screen: UserInfoEditing,
        navigationOptions: () => ({
            headerTitle: 'Information',
            headerStyle: headerNav,
            headerTitleStyle: headerNavTitle,
            headerTintColor: white,
            headerRight: <Text />
        })
    },
    UserMessageScreen: {
        screen: UserMessage,
        navigationOptions: () => ({
            headerTitle: 'Message',
            headerTitleStyle: headerNavTitle,
            headerStyle: headerNav,
            headerTintColor: white,
            headerRight: <Text />,
        })
    },
    UserPhotoScreen: {
        screen: UserPhoto,
        navigationOptions: () => ({
            headerTitle: 'Photo',
            headerStyle: headerNav,
            headerTitleStyle: headerNavTitle,
            headerTintColor: white,
            headerRight: <Text />
        })
    }
}, {
        initialRouteName: 'ProfileScreen'
    });

export default ProfileRouter;

