import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, ScrollView, ActivityIndicator, AsyncStorage
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { width, height, fontScale, verticalScale, horizontalScale } from '../../utillities/Scale';
import HouseWork from '../../content/images/HouseWork.png';
import Panel from '../../components/panel/Panel';
import CommonStyle from '../../content/styles/CommonStyle';
import {
    increaseViewOfJob,
    getJobById,
    joinToJob
} from '../../api/JobAPI';
import {
    getUserIdentity
} from '../../api/JsonWebTokenAPI';
import {
    formatDate,
    splitStr
} from '../../utillities/Utils';
import {
    onGetUserIdentityId,
    onGetUserIdentityRole,
    adminRoleName,
    employerRoleName
} from '../../utillities/UserIdentity';

const {
    white, gray2, black, gray4, blue5, whiteBlue, brownLightGray
} = Color;
const {
     titleBoldText, baseText, smallText
} = CommonStyle;

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            job: null,
            joinDisplay: 'flex',
            unJoinDisplay: 'none',
            filterDisplay: 'none'
        });
        this.params = this.props.navigation.state.params;
    }

    componentWillMount() {
        const params = this.params;
        const { jobId } = params;
        this.props.dispatch({ type: 'SET_JOB_ID_TO_MARKED', id: jobId });
        this.onIncreaseViews(jobId);
        this.onDisplayButtonByRole();
    }

    onDisplayButtonByRole = ()=>{
        try {
            onGetUserIdentityRole()
                .then(role=>{
                    if(role && (role === adminRoleName || role === employerRoleName )){
                        this.state.filterDisplay = 'flex';
                        this.state.joinDisplay = 'none';
                        this.setState(this.state);
                    }else {
                        this.state.filterDisplay = 'none';
                        this.state.joinDisplay = 'flex';
                        this.setState(this.state);
                    }
                })
                .catch(err=>{
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_MARKED', isMarked: false });
        this.props.dispatch({ type: 'SET_JOB_ID_TO_MARKED', id: '' });
    }

    async onIncreaseViews(jobId) {
        // console.log(jobId);
        try {
            let res = await increaseViewOfJob(jobId);
            res = await res.json();
            if (res.success) {
                this.onGetJobData(jobId);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async onGetJobData(jobId) {
        try {
            let res = await getJobById(jobId);
            res = await res.json();
            this.state.job = res;
            this.setState(this.state);

            this.onSetMarkedJob(res);
        } catch (err) {
            console.log(err);
        }
    }

    // onGetUserIdentityId = () => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const userToken = await AsyncStorage.getItem('userToken');
    //             if (userToken) {
    //                 getUserIdentity(userToken)
    //                     .then(res => res.json())
    //                     .then(resJson => {
    //                         if (resJson.userIdentity) {
    //                             const userId = resJson.userIdentity.id;
    //                             resolve(userId);
    //                         } else {
    //                             reject(null);
    //                         }
    //                     })
    //                     .catch(err => reject(err));
    //             } else {
    //                 reject(null);
    //             }
    //         } catch (err) {
    //             reject(err);
    //         }
    //     });
    // }

    onJoinToJob = async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            const { navigate } = this.props.navigation;
            const job = this.state.job;
            if (userToken) {
                const userId = await onGetUserIdentityId();
                const params = this.params;
                const { jobId } = params;
                if (userId && jobId) {  
                    joinToJob(jobId,userId)
                    .then(async (result)=>{
                        const res = await result.json();
                        if(res.success){
                            this.state.joinDisplay = 'none';
                            this.state.unJoinDisplay= 'flex';
                            this.setState(this.state);
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                }
            } else {
                navigate('LoginSreen');
            }
        } catch (err) {
            console.log(err);
        }
    }

    async onSetMarkedJob(res) {
        const userId = onGetUserIdentityId()
        .then(userId=>{
            const isMarked = res.markedUsers.includes(userId);
            this.props.dispatch({ type: 'SET_MARKED', isMarked });
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { job,joinDisplay,unJoinDisplay, filterDisplay } = this.state;
        const { jobId } = this.params;
        // const { } = this.props;
        if (job === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        const jobExtend = job.jobExtend;
        let genderRequire = jobExtend.genderRequirement;
        switch (genderRequire) {
            case 'F': {
                genderRequire = 'Nữ';
                break;
            }
            case 'NR': {
                genderRequire = 'Không yêu cầu';
                break;
            }
            case 'M': {
                genderRequire = 'Nam';
                break;
            }
            default: break;
        }
        return (
            <ScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps='never'
            >
                <View style={styles.container}>
                    <View style={styles.topSection} >
                        <View style={styles.totalViewContainer}>
                            <MaterialIcons
                                size={fontScale(14)}
                                name={'visibility'}
                            />
                            <Text style={smallText}> {job.views}</Text>
                        </View>
                        <View style={styles.brandContainer} >
                            <View style={styles.brandImageContainer}>
                                <Image
                                    source={HouseWork}
                                    style={styles.brandImage}
                                />
                            </View>
                            <View style={styles.brandContentContainer}>
                                <Text style={titleBoldText}>{job.jobName}</Text>
                                <Text style={baseText}>{job.user.company.companyName}</Text>
                            </View>
                        </View>
                        <View style={styles.totalViewContainer}>
                            <TouchableOpacity style={styles.btnComment} onPress={() => navigate('CommentRouter')}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'forum'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Bình luận</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnJoin,{display:joinDisplay}]}
                                onPress={this.onJoinToJob}
                            >
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'exit-to-app'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Tham gia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnJoin,{display:unJoinDisplay}]}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'backspace'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Hủy tham gia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.btnJoin,{display:filterDisplay}]}
                                onPress={()=>navigate('UserJoinedJobFilterSreen', { jobId: jobId })}
                            >
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'format-list-numbered'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Lọc</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divisionLine} />
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'event'}
                                />
                                <Text style={smallText}> Hạn đăng ký: {formatDate(new Date(jobExtend.deadline))}</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'playlist-add-check'}
                                />
                                <Text style={smallText}> Đã đăng ký: {}</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'attach-money'}
                                />
                                <Text style={smallText}> Mức lương: {jobExtend.salary}</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'location-on'}
                                />
                                <Text style={smallText}> Địa điểm: {job.city.province.provinceName}</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'equalizer'}
                                />
                                <Text style={smallText}> Kinh nghiệm: {jobExtend.experience}</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'business-center'}
                                />
                                <Text style={smallText}> Chức vụ: {jobExtend.position}</Text>
                            </View>
                        </View>
                        <View style={[styles.baseInfoContainer, { flex: 1 }]}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'school'}
                                />
                                <Text style={smallText}> Yêu cầu bằng cấp: {jobExtend.graduation}</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'laptop-mac'}
                                />
                                <Text style={smallText}> Hình thức làm việc: {jobExtend.workType}</Text>
                            </View>
                        </View>
                        <View style={styles.baseInfoContainer}>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'account-circle'}
                                />
                                <Text style={smallText}> Số lượng: {jobExtend.amount}</Text>
                            </View>
                            <View style={styles.baseInfoSectionContainer}>
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'wc'}
                                />
                                <Text style={smallText}> Yêu cầu giới tính: {genderRequire}</Text>
                            </View>
                        </View>
                    </View>
                    <Panel title="Mô tả">
                        {
                            splitStr(jobExtend.description, '\n').map((item, index) =>
                                <Text key={index} style={baseText}>{item}</Text>)
                        }
                    </Panel>

                    <Panel title="Yêu cầu công việc">
                        {
                            splitStr(jobExtend.requirement, '\n').map((item, index) =>
                                <Text key={index} style={baseText}>{item}</Text>)
                        }
                    </Panel>

                    <Panel title="Quyền lợi">
                        {
                            splitStr(jobExtend.benefit, '\n').map((item, index) =>
                                <Text key={index} style={baseText}>{item}</Text>)
                        }
                    </Panel>

                    <Panel title="Thông tin liên hệ">
                        {
                            splitStr(jobExtend.contact, '\n').map((item, index) =>
                                <Text key={index} style={baseText}>{item}</Text>)
                        }
                    </Panel>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: whiteBlue,
    },
    container: {
        flex: 1,
        marginHorizontal: fontScale(10),
        marginBottom: fontScale(5),
        marginTop: fontScale(10),
    },
    topSection: {
        backgroundColor: white,
        width: width - fontScale(20),
        borderRadius: fontScale(5),
        flex: 1,
        marginBottom: fontScale(5),
        shadowColor: gray4,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset:
            { width: 1, height: 1 },
        paddingBottom: fontScale(15)
    },
    brandContainer: {
        minHeight: verticalScale(80),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    totalViewContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: fontScale(10),
        paddingTop: fontScale(5),
        flex: 1
    },
    brandImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandImage: {
        width: fontScale(56),
        height: fontScale(56),
        borderRadius: fontScale(28),
        borderColor: gray2,
        borderWidth: 3
    },
    brandContentContainer: {
        flex: 3,
        paddingRight: horizontalScale(10)
    },
    divisionLine: {
        height: 0.5,
        width: (width * 9) / 10,
        backgroundColor: gray2,
        alignSelf: 'center',
        marginTop: fontScale(10)
    },
    baseInfoContainer: {
        flexDirection: 'row',
        flex: 1,
        // alignItems: 'center',
        paddingTop: fontScale(10),
    },
    baseInfoSectionContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: fontScale(10)
    },
    btnJoin: {
        flexDirection: 'row',
        padding: fontScale(5),
        borderRadius: fontScale(4),
        backgroundColor: blue5,
        marginLeft: fontScale(5)
    },
    btnComment: {
        flexDirection: 'row',
        padding: fontScale(5),
        borderRadius: fontScale(4),
        backgroundColor: brownLightGray,
    }
});

function mapStateToProps(state) {
    return {
        lang: state.lang, hasToken: state.hasToken
    };
}

export default connect(mapStateToProps)(Job);

