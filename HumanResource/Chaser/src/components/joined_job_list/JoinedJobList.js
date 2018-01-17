import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, FlatList, Image,
    ActivityIndicator, AsyncStorage, Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Concert from '../../content/images/Concert.png';
import HouseWork from '../../content/images/HouseWork.png';
import Security from '../../content/images/Security.png';
import PGPB from '../../content/images/PGPB.png';
import FaceModel from '../../content/images/FaceModel.png';
import Sell from '../../content/images/Sell.png';
import {
    width, height, fontScale, verticalScale, horizontalScale
} from '../../utillities/Scale';
import {
    getUserIdentity
} from '../../api/JsonWebTokenAPI';
import {
    getMarkedJobsOfUserByUserId,
    unMarkJob
} from '../../api/JobAPI';

const { white, gray2, black, gray4, blue5, whiteBlue, brownBlack, yellow2 } = Color;

class JoinedJobList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            joinedJobs: null
        });
    }

    componentWillMount() {
        this.onGetJoinedJobData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isMarkedJobChange !== this.props.isMarkedJobChange) {
            this.onGetJoinedJobData();
        }
    }

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

    onGetJoinedJobData = async () => {
        try {
            const userId = await this.onGetUserIdentityId();
            let res = await getMarkedJobsOfUserByUserId(userId);
            res = await res.json();
            this.state.joinedJobs = res.markedJobs;
            this.setState(this.state);
        } catch (err) {
            console.log(err);
        }
    }

    onUnMarkJob = async (jobId) => {
        const userId = await this.onGetUserIdentityId();
        let resUnMark = await unMarkJob(userId, jobId);
        resUnMark = await resUnMark.json();
        if (resUnMark.success) {
            this.props.dispatch({ type: 'CHANGE_MARKED_JOB' });
        }
    }

    onRenderItem(job, navigate) {
        return (<View
            style={{
                width: width - horizontalScale(24),
                height: verticalScale(100),
                marginHorizontal: horizontalScale(12),
                marginVertical: verticalScale(5),
                borderRadius: fontScale(5),
                backgroundColor: white,
                shadowOpacity: 1,
                shadowColor: black,
                shadowRadius: 1,
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                flexDirection: 'row'
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={HouseWork} style={{ width: fontScale(56), height: fontScale(56) }} />
            </View>
            <View style={{ flex: 3, paddingRight: horizontalScale(10) }}>
                <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        paddingTop: verticalScale(6)
                    }}
                >
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'star-border'}
                        style={{ color: yellow2 }}
                        onPress={() => (
                            Alert.alert(
                                'Thông báo',
                                'Bạn muốn bỏ quan tâm công việc này?',
                                [
                                    { text: 'Quay lại', style: 'cancel' },
                                    { text: 'Đồng ý', onPress: () => this.onUnMarkJob(job._id) },
                                ]
                            )
                        )}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={{
                            color: brownBlack,
                            fontWeight: 'bold',
                            fontSize: fontScale(13)
                        }}
                    >{job.jobName}
                    </Text>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={{
                            fontSize: fontScale(11)
                        }}
                    >{job.user.company.companyName}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        paddingBottom: verticalScale(4),
                        paddingTop: verticalScale(6)
                    }}
                    onPress={() => navigate('JobSreen', { jobId: job._id })}
                >
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'forward'}
                        style={{ color: gray4 }}
                    />
                </TouchableOpacity>
            </View>
        </View>);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { joinedJobs } = this.state;
        if (joinedJobs === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, paddingVertical: 10, backgroundColor: whiteBlue }}>
                <FlatList
                    style={{}}
                    data={joinedJobs}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={1}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.lang,
        isMarkedJobChange: state.isMarkedJobChange
    };
}

export default connect(mapStateToProps)(JoinedJobList);

