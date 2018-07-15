import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
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
        return (
            <View style={styles.container}>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteBlue,
    }    
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Profile);