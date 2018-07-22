import React, { Component } from 'react';
import {
    View, Text, FlatList, Image,
    TouchableOpacity, ActivityIndicator, AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import { Languages } from '../../content/languages/Languages';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Color from '../../content/color/Color';
import { getUserIdentity } from '../../api/JsonWebTokenAPI';
import { getNotificationByUserId, readNotification } from '../../api/NotificationAPI';
import { fontScale, horizontalScale, height } from '../../utillities/Scale';
import CommonStyle from '../../content/styles/CommonStyle';
import { formatDateAndTime } from '../../utillities/Utils';
import{
    onGetUserIdentityId,
    onGetUserIdentityRole,
    userRoleName
} from '../../utillities/UserIdentity';

const { white, gray2, whiteBlue } = Color;
const { baseText, smallText } = CommonStyle;

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: null
        };
    }

    componentWillMount() {
        this.onGetNotification();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasToken !== this.props.hasToken){
            this.state.notifications = null;
            this.setState(this.state);
            this.onGetNotification();
        }
    }

    onGetNotification = async () => {
        try {
            const userId = await onGetUserIdentityId();
            const userRole = await onGetUserIdentityRole();
            if(userRole!=userRoleName){
                return;
            }
            let res = await getNotificationByUserId(userId);
            res = await res.json();
            this.state.notifications = res;
            this.setState(this.state);
            this.onDispatch(res, userId);
        } catch (err) {
            console.log(err);
        }
    }

    onDispatch = (res, userId) => {
        const { dispatch } = this.props;
        let notiCount = 0, result;
        res.forEach(noti => {
            if (noti.readBy.length) {
                result = noti.readBy.filter(item => item.readerId !== userId);
                notiCount += result.length;
            } else {
                notiCount += 1;
            }
        });
        // const result = res.readBy.filter(item => item.readerId !== userId);
        dispatch({ type: 'SET_BADGE_COUNT', count: notiCount });
    }

    onNavigate = async (navigate, notification) => {
        try {
            const userId = await onGetUserIdentityId();
            let res = await readNotification(notification._id, userId);
            res = await res.json();
            if (res.success) {
                navigate('JobSreen', { jobId: notification.job });
            }
        } catch (err) {
            console.log(err);
        }
    }

    onRenderItem(notification, navigate) {
        return (<TouchableOpacity
            onPress={() => this.onNavigate(navigate, notification)}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: fontScale(15)
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={Image1}
                        style={{
                            width: horizontalScale(36),
                            height: horizontalScale(36),
                            borderRadius: horizontalScale(18)
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 6,
                        justifyContent: 'center',
                        paddingHorizontal: horizontalScale(7)
                    }}
                >
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={baseText}
                    >
                        {notification.message}
                    </Text>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={smallText}
                    >
                        {formatDateAndTime(new Date(notification.createdDate))}
                    </Text>
                </View>
            </View>
            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={Image3}
                    style={{
                        width: horizontalScale(36),
                        height: horizontalScale(36)
                    }}
                />
            </View> */}
            <View style={{ flex: 1, height: 1, backgroundColor: gray2 }} />
        </TouchableOpacity>);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { notifications } = this.state;
        
        if (!notifications || !notifications.length) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                </View>
            );
        }

        let indicatorDisplay = 'flex';
        if(notifications || notifications.length){
            indicatorDisplay = 'none';
        }

        return (
            <View style={{ flex: 1, paddingVertical: 10, backgroundColor: whiteBlue}}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display:indicatorDisplay }}>
                    <ActivityIndicator />
                </View>
                <FlatList
                    style={{ backgroundColor: white }}
                    data={notifications}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={1}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang, hasToken: state.hasToken };
}

export default connect(mapStateToProps)(Notification);
