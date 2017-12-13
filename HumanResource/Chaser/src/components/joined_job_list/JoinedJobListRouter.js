import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { } from '../../utillities/Scale';
import Color from '../../content/color/Color';
import JoinedJobListTopBarTitle from '../joined_job_list/JoinedJobListTopBarTitle';
import Job from '../job/Job';
import JobTopBarTitle from '../job/JobTopBarTitle';
import JobTopBarRight from '../job/JobTopBarRight';
import JoinedJobList from '../joined_job_list/JoinedJobList';
import ButtonShowMenu from '../home/ButtonShowMenu';

import { Languages } from '../../content/languages/Languages';

const { white, brownBlack, black, yellow2,bluegreen } = Color;

const JoinedJobListRouter = StackNavigator({
    JoinedJobListScreen: {
        screen: JoinedJobList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <JoinedJobListTopBarTitle />,
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
            headerRight: <Text />
        })
    },
    JobSreen: {
        screen: Job,
        navigationOptions: () => ({
            headerTitle: <JobTopBarTitle />,
            headerTitleStyle: { alignSelf: 'center', color: white },
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
            headerRight: <JobTopBarRight color={yellow2} />,
            headerTintColor: white
        })
    }
}, {
        initialRouteName: 'JoinedJobListScreen'
    });

export default JoinedJobListRouter;

