import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../../content/languages/Languages';
import Color from '../../../content/color/Color';
import CommonStyle from '../../../content/styles/CommonStyle';
import {
    width, height, verticalScale,
    fontScale, horizontalScale
} from '../../../utillities/Scale';
import CMND_MatTruoc from '../../../content/images/cmnd_1.jpg';
import CMND_MatSau from '../../../content/images/cmnd_1_matsau.jpg';

const {
    white, gray2, black, gray4, blue5, brownLightGray,
    whiteBlue, orange2, blue3, blue7, green3
} = Color;
const { baseText, smallText, baseBoldText } = CommonStyle;

class UserPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = ({
             imgArrs: [CMND_MatTruoc, CMND_MatSau]
        });
    }

    onRenderItem(item, navigate) {
            return (<TouchableOpacity>
                <View
                    style={{
                        width: width / 2,
                        height: width / 2,
                        backgroundColor: item.bgColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={this.state.imgArrs[item.key -1]} style={{ width: width/2 -5, height: width/2 -5, resizeMode: 'stretch'}}
                    />
                </View> 
            </TouchableOpacity>);
    }

    render() {
        // const { lang } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{ key: '1' },
                    { key: '2' }]}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={2}
                //ListHeaderComponent={Header}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteBlue,
        padding: fontScale(5)
    }    
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(UserPhoto);