import React, { Component } from 'react';
import { View, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Color from '../../content/color/Color';
import { fontScale } from '../../utillities/Scale';
import {
    unMarkJob, markJob
} from '../../api/JobAPI';
import {
    getUserIdentity
} from '../../api/JsonWebTokenAPI';

const { white, yellow2 } = Color;

class JobTopBarRight extends Component {

    onGetUserIdentityId = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                if (userToken) {
                    getUserIdentity(userToken)
                        .then(res => res.json())
                        .then(resJson => {
                            if (resJson.userIdentity) {
                                const userId = resJson.userIdentity.id;
                                resolve(userId);
                            } else {
                                reject(null);
                            }
                        })
                        .catch(err => reject(err));
                } else {
                    reject(null);
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    onMarkJob = async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            const { isMarked, jobIdToMark, navigation } = this.props;
            const { navigate } = navigation;
            if (userToken) {
                const userId = await this.onGetUserIdentityId();
                if (userId && jobIdToMark) {
                    if (isMarked) {
                        let resUnMark = await unMarkJob(userId, jobIdToMark);
                        resUnMark = await resUnMark.json();
                        if (resUnMark.success) {
                            this.onDispatch(false);
                        }
                    } else {
                        let resMark = await markJob(userId, jobIdToMark);
                        resMark = await resMark.json();
                        if (resMark.success) {
                            this.onDispatch(true);
                        }
                    }
                }
            } else {
                navigate('LoginSreen');
            }
        } catch (err) {
            console.log(err);
        }
    }

    onDispatch = (isMarked) => {
        const { dispatch } = this.props;
        dispatch({ type: 'SET_MARKED', isMarked });
        dispatch({ type: 'CHANGE_MARKED_JOB' });
    }

    render() {
        const { isMarked } = this.props;
        const color = isMarked ? yellow2 : white;
        return (
            <View
                style={{
                    alignSelf: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        padding: fontScale(10)
                    }}
                    onPress={this.onMarkJob}
                >
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'star-border'}
                        style={{
                            color
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isMarked: state.isMarked,
        jobIdToMark: state.jobIdToMark
    };
}

export default connect(mapStateToProps)(JobTopBarRight);

