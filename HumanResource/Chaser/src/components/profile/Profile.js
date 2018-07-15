import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Avatar from '../../content/images/avatarsino.jpg';
import Cover from '../../content/images/cover.jpg';
import CommonStyle from '../../content/styles/CommonStyle';
import {
    width, height, verticalScale,
    fontScale, horizontalScale
} from '../../utillities/Scale';

const {
    white, gray2, black, gray4, blue5, brownLightGray,
    whiteBlue, orange2, blue3, blue7, green3
} = Color;
const { baseText, smallText, baseBoldText } = CommonStyle;

class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comment: ''
    //     };
    // }
    render() {
        // const { lang } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.backGroundContainer}>
                        <Image
                            source={Cover}
                            style={styles.backGroundImg}
                        />
                    </View>
                    <View style={styles.imageInfoContainer}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={Avatar}
                                style={styles.avatarImg}
                            />
                        </View>
                        <View style={styles.middleContainer}>
                            <View style={styles.userNameContainer}>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode={'tail'}
                                    style={baseBoldText}
                                >Nguyễn Hoàng Phúc</Text>
                            </View>
                            <View style={styles.homeTownContainer}>
                                <MaterialIcons
                                    size={fontScale(11)}
                                    name={'location-on'}
                                />
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                    style={smallText}
                                >Cai Lậy, Tiền Giang</Text>
                            </View>
                        </View>
                        <View style={styles.btnEditContainer}>
                            {/* <TouchableOpacity
                                style={styles.btnEdit}
                                onPress={()=>navigate('UserInfoEditingScreen')}
                            >
                                <MaterialIcons
                                    size={fontScale(14)}
                                    name={'edit'}
                                    style={{ color: white }}
                                />
                                <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Edit profile</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View >
                <View style={styles.middleSection}>
                    <View style={styles.buttonGroupContainer}>
                        <View style={styles.leftGroupContainer}>
                            <TouchableOpacity style={styles.btnGroup} onPress={()=>navigate('UserPhotoScreen')}>
                                <Text style={[styles.txtButtonGroup, baseText]}>Photo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divisionLine1} />
                        <View style={styles.middleGroupContainer}>
                            <TouchableOpacity style={styles.btnGroup} onPress={()=>navigate('UserInfoEditingScreen')}>
                                <Text style={[styles.txtButtonGroup, baseText]}>Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divisionLine2} />
                        <View style={styles.rightGroupContainer}>
                            <TouchableOpacity style={styles.btnGroup} onPress={()=>navigate('UserMessageScreen')}>
                                <Text style={[styles.txtButtonGroup, baseText]}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomSection}>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomItem}>
                            <MaterialIcons
                                size={fontScale(18)}
                                name={'cake'}
                                style={styles.bottomIcon}
                            />
                            <Text style={baseText}> 2/2/2000</Text>
                        </View>
                        <View style={styles.bottomItem}>
                            <MaterialIcons
                                size={fontScale(18)}
                                name={'school'}
                                style={styles.bottomIcon}
                            />
                            <Text style={baseText}> Đại học SPKT TPHCM</Text>
                        </View>
                        <View style={styles.bottomItem}>
                            <MaterialIcons
                                size={fontScale(18)}
                                name={'email'}
                                style={[styles.bottomIcon,{marginTop:verticalScale(2)}]}
                            />
                            <Text style={baseText}> nguyendung300694@gmail.com</Text>
                        </View>
                        <View style={styles.bottomItem}>
                            <MaterialIcons
                                size={fontScale(18)}
                                name={'phone-iphone'}
                                style={styles.bottomIcon}
                            />
                            <Text style={baseText}> 01639460220</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteBlue,
    },
    topSection: {
        height: verticalScale(150),
        flex: 5
    },
    middleSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonGroupContainer: {
        marginTop: fontScale(20),
        marginHorizontal: fontScale(15),
        flexDirection: 'row',
        height: verticalScale(40),
        backgroundColor: blue3,
    },
    leftGroupContainer: {
        flex: 1,
        backgroundColor: green3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightGroupContainer: {
        flex: 1,
        backgroundColor: blue7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleGroupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divisionLine1: {
        width: horizontalScale(30),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: horizontalScale(30),
        borderTopWidth: verticalScale(40),
        borderRightColor: 'transparent',
        borderTopColor: green3
    },
    divisionLine2: {
        width: horizontalScale(30),
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: horizontalScale(30),
        borderTopWidth: verticalScale(40),
        borderRightColor: 'transparent',
        borderTopColor: blue7,
        transform: [
            { rotate: '180deg' }
        ]
    },
    bottomSection: {
        flex: 4,
        padding: fontScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        minWidth: width / 2
    },
    bottomIcon: {
        color: blue5,
        padding: fontScale(5)
    },
    bottomItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(10)
    },
    backGroundContainer: {
        width,
        height: verticalScale(250),
        flex: 1,
        top: 0,
        position: 'absolute'
    },
    backGroundImg: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'stretch'
    },
    imageInfoContainer: {
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: verticalScale(200),
        flex: 1,
        height: verticalScale(100)
    },
    avatarContainer: {
        width: (width / 10) * 3,
        alignItems: 'center',
    },
    avatarImg: {
        width: fontScale(100),
        height: fontScale(100),
        borderColor: white,
        borderRadius: fontScale(50),
        borderWidth: fontScale(3)
    },
    userNameContainer: {
        overflow: 'hidden',
        paddingHorizontal: horizontalScale(4)
    },
    homeTownContainer: {
        overflow: 'hidden',
        paddingHorizontal: horizontalScale(4),
        flexDirection: 'row',
        alignItems: 'center'
    },
    middleContainer: {
        width: (width / 10) * 4,
        justifyContent: 'center',
        // marginRight: horizontalScale(5),
        marginTop: verticalScale(50)
    },
    btnEditContainer: {
        width: (width / 10) * 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: verticalScale(50)
    },
    btnEdit: {
        flexDirection: 'row',
        paddingVertical: verticalScale(5),
        paddingHorizontal: horizontalScale(7),
        borderRadius: fontScale(4),
        backgroundColor: orange2,
        marginRight: horizontalScale(10),
    },
    txtButtonGroup: {
        color: white
    },
    btnGroup: {
        padding: fontScale(10)
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Profile);

