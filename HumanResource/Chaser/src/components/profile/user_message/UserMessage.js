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
import Image1 from '../../../content/images/LoginBackGround1.png';
import Image2 from '../../../content/images/LoginBackGround2.jpg';
import Image3 from '../../../content/images/LoginBackGround3.jpg';

const {
    white, gray2, black, gray4, blue5, brownLightGray,
    whiteBlue, orange2, blue3, blue7, green3
} = Color;
const { baseText, smallText, baseBoldText } = CommonStyle;

class UserMessage extends Component {
     constructor(props) {
         super(props);
         this.state = {
           
         };
     }
     onRenderItem(notification, navigate) {
        return (<TouchableOpacity>
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
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                            style={[baseText,{ fontWeight:'bold' }]}
                            > 
                                {notification.userName}
                        </Text>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={[smallText,{ marginTop:verticalScale(2) }]}
                        >
                            {notification.createdDate}
                        </Text>
                    </View>
                    <View>
                        <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={[smallText,{ fontStyle:'italic' }]}
                        >
                            {notification.message}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: gray2 }} />
        </TouchableOpacity>);
    }

    render() {
        // const { lang } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ backgroundColor: white }}
                    data={[
                        { message:'hello Phuc', createdDate:'20/3/2018', userName:'Dũng Heo' },
                        { message:'chao Phuc', createdDate:'10/3/2018', userName:'Tuấn Anh' }
                    ]}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={1}
                />
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

export default connect(mapStateToProps)(UserMessage);