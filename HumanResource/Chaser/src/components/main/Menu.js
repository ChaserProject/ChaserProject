import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image
} from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../../content/color/Color';
import Cover from '../../content/images/cover.jpg';
import Avatar from '../../content/images/avatarsino.jpg';
import {
    Languages, setLanguage
} from '../../content/languages/Languages';
import {
    fontScale, horizontalScale, verticalScale
} from '../../utillities/Scale';
import CommonStyle from '../../content/styles/CommonStyle';

const { black2, white } = Color;
const { baseText, titleText } = CommonStyle;
class Menu extends Component {

    click() {
        setLanguage('en');
        this.props.dispatch({ type: 'SET_ENGLISH_LANGUAGE' });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView
                style={styles.container}
            >
                {/* <TouchableOpacity onPress={() => navigate('DrawerClose')}>
                    <Text>Close</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => this.click()} style={{ alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Change Language</Text>
                </TouchableOpacity> */}
                <View style={styles.topSection}>
                    <Image
                        source={Cover}
                        style={styles.backGroundImg}
                    />
                    <Image
                        source={Avatar}
                        style={styles.avatarImg}
                    />
                    <Text
                        style={[styles.userName, baseText]}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                    >
                        Nguyễn Hoàng Phúc
                    </Text>
                </View>
                <View style={styles.bottomSection}>
                    <View
                        style={styles.item}
                    >
                        <MaterialIcons
                            name={'account-circle'}
                            size={horizontalScale(20)}
                            style={styles.icon}
                        />
                        <TouchableOpacity onPress={() => navigate('ProfileScreen')}>
                            <Text
                                style={[styles.textItem, titleText]}
                            >
                                Thông tin cá nhân
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: black2,
        flex: 1
    },
    item: {
        padding: fontScale(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    textItem: {
        color: white,
        paddingHorizontal: horizontalScale(15)
    },
    icon: {
        color: white
    },
    topSection: {
        height: verticalScale(200),
        flex: 1,
        top: 0,
    },
    bottomSection: {

    },
    backGroundImg: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'stretch'
    },
    avatarImg: {
        width: horizontalScale(46),
        height: horizontalScale(46),
        borderColor: white,
        borderRadius: horizontalScale(23),
        borderWidth: fontScale(1),
        position: 'absolute',
        top: verticalScale(20),
        left: horizontalScale(20)
    },
    userName: {
        position: 'absolute',
        left: horizontalScale(20),
        top: verticalScale(160),
        color: white,
        width: horizontalScale(210)
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Menu);
