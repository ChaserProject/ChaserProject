import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    FlatList, Image, ActivityIndicator
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
    getJobsByJobTypeOrderId,
    getJobByMultiParams
} from '../../api/JobAPI';

import {
    formatTimeHHmm
} from '../../utillities/Utils';
import {
    width,
    height,
    fontScale,
    verticalScale,
    horizontalScale
} from '../../utillities/Scale';

const {
    white, gray2, black, gray4, blue5, whiteBlue, brownBlack
} = Color;

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            jobs: null
        });
    }

    componentWillMount() {
        const params = this.props.navigation.state.params;
        const { key } = params;
        this.onGetJobData(key);
    }

    onGetJobData = async (key) => {
        try {
            // let res = await getJobsByJobTypeOrderId(key);
            // res = await res.json();
            // this.state.jobs = res;
            // this.setState(this.state);
            const params = {
                jobType:key, 
                province: null, 
                name: ''
            };
            getJobByMultiParams(params)
                .then(rst => rst.json())
                .then(res=>{
                    this.state.jobs = res;
                    this.setState(this.state);
                })
                .catch(err=>{
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
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
                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                        fontSize: 10,
                        color: brownBlack,
                        alignSelf: 'flex-end',
                        paddingTop: verticalScale(6)
                    }}
                >{formatTimeHHmm(new Date(job.dateCreated))}
                </Text>
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
                        paddingBottom: verticalScale(4)
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
        const { jobs } = this.state;
        if (jobs === null) {
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
                    data={jobs}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={1}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(JobList);

