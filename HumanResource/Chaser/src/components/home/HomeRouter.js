import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SearchInput from './SearchInput';
import ButtonShowMenu from './ButtonShowMenu';
import { } from '../../utillities/Scale';
import Color from '../../content/color/Color';
import Home from './Home';
import JobList from '../joblist/JobList';
import HomeTopBarTitle from '../home/HomeTopBarTitle';
import JobListTopBarTitle from '../joblist/JobListTopBarTitle';
import JobTopBarTitle from '../job/JobTopBarTitle';
import JobTopBarRight from '../job/JobTopBarRight';
import CommentRouter from '../comment/CommentRouter';

import Job from '../job/Job';
import { Languages } from '../../content/languages/Languages';

const { white, brownBlack, black, bluegreen } = Color;

const HomeRouter = StackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HomeTopBarTitle />,
            headerStyle: {
                backgroundColor: black,
                shadowColor: black,
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 1,
                    width: 0
                }
            },
            headerLeft: <ButtonShowMenu navigation={navigation} />,
            headerRight: <SearchInput navigation={navigation} />
        })
    },
    JobListSreen: {
        screen: JobList,
        navigationOptions: () => ({
            headerTitle: <JobListTopBarTitle />,
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
            headerRight: (<Text />),
            headerTintColor: white
        })
    },   
    CommentRouter: {
        screen: CommentRouter
    }
}, {
        initialRouteName: 'HomeScreen'
    });

export default HomeRouter;

