import React, { Component } from 'react';
import {
    View, Text, StatusBar, TextInput, StyleSheet, Image,
    TouchableOpacity, Alert, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import CommonStyle from '../../content/styles/CommonStyle';
import Color from '../../content/color/Color';
import LoginBackGround3 from '../../content/images/LoginBackGround3.jpg';
import Logo from '../../content/images/Logo.png';
import {
    width, height, fontScale,
    horizontalScale, verticalScale
} from '../../utillities/Scale';
import {
    Languages
} from '../../content/languages/Languages';
import {
    server_host
} from '../../api/api_config';
import {
    tokenName
} from '../../utillities//UserIdentity';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    componentDidMount() {

    }

    onLogin = async () => {
        try {
            const { password, user } = this.state;
            if (password === '' || user === '') {
                return Alert.alert(
                    'Thông báo',
                    'Vui lòng nhập đầy đủ tài khoản và mật khẩu!',
                    [
                        { text: 'OK' },
                    ],
                    { cancelable: false }
                );
            }
            const res = await fetch(`${server_host}/service/user/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: this.state.user,
                    passwordHash: this.state.password
                })
            });
            const resJson = await res.json();
            // console.log(resJson);
            if (resJson.success) {
                await AsyncStorage.setItem(tokenName, JSON.stringify(resJson.token));
                await this.props.dispatch({ type: 'SET_TOKEN' });
                this.props.navigation.goBack(null);
            } else {
                Alert.alert(
                    'Thông báo',
                    'Tài khoản hoặc mật khẩu không chính xác!',
                    [
                        { text: 'Quay lại', style: 'cancel' },
                    ]
                );
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        // const { container } = CommonStyle;
        const { white } = Color;
        const { input, backgroundImage, inputGroup, btnBottomText,
            bottomSection, icon, btnLoginText, btnLogin, logoImage,
            logoSection, formLoginSection
        } = styles;
        const { navigate } = this.props.navigation;
        return (
            <Image source={LoginBackGround3} style={backgroundImage}>
                <StatusBar
                    barStyle='light-content'
                /* translucent */
                />
                <View style={logoSection}>
                    <Image source={Logo} style={logoImage} />
                </View>
                <View style={formLoginSection}>
                    <View style={inputGroup}>
                        <MaterialIcons
                            name={'account-circle'}
                            size={fontScale(24)}
                            style={icon}
                        />
                        <TextInput
                            style={input}
                            onChangeText={(user) => this.setState({ user })}
                            value={this.state.user}
                            maxLength={50}
                            underlineColorAndroid='transparent'
                            placeholder={Languages.PhoneNumber}
                            placeholderTextColor={white}
                            selectionColor={white}
                        />
                    </View>
                    <View style={inputGroup}>
                        <MaterialIcons
                            name={'vpn-key'}
                            size={fontScale(24)}
                            style={icon}
                        />
                        <TextInput
                            style={input}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            maxLength={50}
                            underlineColorAndroid='transparent'
                            placeholder={Languages.Password}
                            placeholderTextColor={white}
                            secureTextEntry
                            selectionColor={white}
                        />
                    </View>
                    <TouchableOpacity
                        style={btnLogin}
                        onPress={this.onLogin}
                    >
                        <Text style={btnLoginText}>
                            {Languages.Login}
                        </Text>
                    </TouchableOpacity>
                    <View style={bottomSection}>
                        <TouchableOpacity
                            onPress={() => navigate('CreateAccount')}
                        >
                            <Text style={btnBottomText}>
                                {Languages.CreateAccount}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigate('Help')}
                        >
                            <Text style={btnBottomText}>
                                {Languages.NeedHelp}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Image >
        );
    }
}

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(7),
        backgroundColor: Color.grayOpacity,
        borderRadius: horizontalScale(60)
    },
    icon: {
        margin: horizontalScale(5),
        alignSelf: 'center',
        color: Color.white
    },
    input: {
        height: verticalScale(50),
        fontSize: fontScale(16),
        flex: 1,
        color: Color.white
    },
    backgroundImage: {
        width,
        height
    },
    btnLogin: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(20),
        height: verticalScale(50),
        backgroundColor: Color.blue5,
        borderRadius: horizontalScale(60),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLoginText: {
        fontSize: fontScale(16),
        color: Color.white,
        fontWeight: 'bold'
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(30)
    },
    btnBottomText: {
        color: Color.white,
        fontSize: fontScale(14)
    },
    logoImage: {
        width: width / 1.3,
        height: height / 1.5,
    },
    logoSection: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formLoginSection: {
        flex: 1
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Login);
