import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../../content/languages/Languages';
import Color from '../../../content/color/Color';
import CommonStyle from '../../../content/styles/CommonStyle';
import {
    width, height, verticalScale,
    fontScale, horizontalScale
} from '../../../utillities/Scale';
import Avatar from '../../../content/images/avatarsino.jpg';
import InfoBackground from '../../../content/images/info_background.jpg';
import {
    getUserByUserId
} from '../../../api/UserAPI';
import {
    formatDate
} from '../../../utillities/Utils';

const {
    white, gray2, black, gray4, blue5, brownLightGray,
    whiteBlue, orange2, blue3, blue7, green3, grayOpacity
} = Color;
const { baseText, smallText, baseBoldText } = CommonStyle;

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
        this.params = this.props.navigation.state.params;
    }

    componentWillMount() {
        const {user} = this.params;
        this.user = user;
    }

    render() {
        // const { lang } = this.props;
        if(!this.user){
            return  (<View style={styles.container}/>)
        }
        const user = this.user;
        return (
            <View
                style={styles.container}
            >
                <Image source={InfoBackground} style={styles.info_background}>
                     <View style={styles.avatarContainer}>
                    <Image
                        source={Avatar}
                        style={styles.avatarImg}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
                    <View style={[styles.inputGroup,{ display: user.city ? 'flex' : 'none' }]}>
                        <MaterialIcons
                                name={'location-on'}
                                size={fontScale(10)}
                                style={styles.icon}
                        />
                        <Text style={styles.address}>
                            {user.city ? `${user.city.cityName}, ${user.city.province.provinceName}`  : ''}
                        </Text>
                    </View>
                    <Text style={styles.horizontal_line} />
                    <View style={[styles.inputExtendGroup,{display: user.userExtend.birthday ? 'flex' : 'none'}]}>
                        <MaterialIcons
                                name={'cake'}
                                size={fontScale(13)}
                                style={styles.icon_extend}
                        />
                        <Text style={styles.text}> {formatDate(new Date(user.userExtend.birthday))}</Text>
                    </View>
                    <View style={[styles.inputExtendGroup]}>
                        <MaterialIcons
                                name={'wc'}
                                size={fontScale(13)}
                                style={styles.icon_extend}
                        />
                        <Text style={styles.text}> {user.userExtend.gender?'Nam':'Nữ'}</Text>
                    </View>
                     <View style={[styles.inputExtendGroup,{display: user.userExtend.hightSchool ? 'flex' : 'none'}]}>
                        <MaterialIcons
                                name={'import-contacts'}
                                size={fontScale(13)}
                                style={styles.icon_extend}
                        />
                        <Text style={styles.text}> {user.userExtend.hightSchool}</Text>
                    </View>
                    <View style={[styles.inputExtendGroup,{display: user.userExtend.university ? 'flex' : 'none'}]}>
                        <MaterialIcons
                                name={'school'}
                                size={fontScale(13)}
                                style={styles.icon_extend}
                        />
                        <Text style={styles.text}> {user.userExtend.university}</Text>
                    </View>
                    <View style={[styles.inputExtendGroup,{display: user.email ? 'flex' : 'none'}]}>
                        <MaterialIcons
                                name={'email'}
                                size={fontScale(13)}
                                style={[styles.icon_extend,{marginTop:0.6}]}
                        />
                        <Text style={styles.text}> {user.email}</Text>
                    </View>
                    <View style={[styles.inputExtendGroup,{display: user.mobile ? 'flex' : 'none'}]}>
                        <MaterialIcons
                                name={'phone-iphone'}
                                size={fontScale(13)}
                                style={[styles.icon_extend,{marginTop:0.6}]}
                        />
                        <Text style={styles.text}> {user.mobile}</Text>
                    </View>
                </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatarContainer:{
        alignItems: 'center',
        padding: fontScale(20)
    },
    avatarImg: {
        width:  (width / 10) * 3.8,
        height: (width / 10) * 3.8,
        borderColor: white,
        borderWidth: fontScale(3)
    },
    infoContainer:{
        paddingHorizontal: horizontalScale(20),
        paddingBottom: verticalScale(10)
    },
    userName:{
        fontSize: fontScale(16),
        fontWeight: 'bold',
        color:white
    },
    address:{
        fontSize: fontScale(11),
        color:white
    },
    horizontal_line:{
        height: 1,
        backgroundColor: gray4,
        marginVertical: verticalScale(4)
    },
    info_background:{
        flex: 1,
        resizeMode: 'stretch',
        width:width,
        height:height
    },
    inputGroup:{
         flexDirection: 'row'
    },
    icon: {
        marginHorizontal: horizontalScale(2),
        marginVertical: verticalScale(3),
        alignSelf: 'center',
        color: Color.white
    },
    text:{
        fontSize: fontScale(13),
        color:white
    },
    inputExtendGroup:{
        flexDirection: 'row',
        paddingVertical: verticalScale(7)
    },
    icon_extend:{
        marginHorizontal: horizontalScale(5),
        marginTop: verticalScale(-1),
        alignSelf: 'center',
        color: Color.white
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(UserInfo);