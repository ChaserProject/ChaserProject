import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';

const { gray2, gray4, white, blue5, gray8, black } = Color;
const MyItem =
    (<View
        style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 4,
            marginRight: 38
        }}
    >
        <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        >
            <Image source={Image1} style={{ width: 24, height: 24, borderRadius: 20 }} />
            <Text style={{ fontSize: 10, textAlign: 'left' }}>20:08</Text>
        </View>
        <View style={{ flex: 8, justifyContent: 'flex-start', flexDirection: 'row' }} >
            <Text
                style={{
                    fontSize: 13,
                    textAlign: 'left',
                    flexWrap: 'wrap',
                    borderStyle: 'solid',
                    backgroundColor: blue5,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopRightRadius: 30,
                    paddingHorizontal: 14,
                    paddingBottom: 10,
                    paddingTop: 4
                }}
            >
                Hi! I'm Andy, nice to meet you.
        asjd haskjdh showDetails asd sahdjkas hdjakshd jakshjks a
</Text>
        </View>
    </View>);

const YourIten = (<View
    style={{
        flex: 1,
        flexDirection: 'row',
        marginVertical: 4,
        marginLeft: 38
    }}
>
    <View
        style={{
            flex: 8,
            justifyContent: 'flex-end',
            flexDirection: 'row',
        }}
    >
        <Text
            style={{
                fontSize: 13,
                textAlign: 'right',
                flexWrap: 'wrap',
                borderStyle: 'solid',
                backgroundColor: gray2,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                paddingHorizontal: 14,
                paddingBottom: 10,
                paddingTop: 4
            }}
        >
            Hi! I'm Computer, nice to meet you too.
</Text>
    </View>
    <View
        style={{
            flex: 1,
            alignItems: 'center'
        }}
    >
        <Image source={Image3} style={{ width: 24, height: 24, borderRadius: 20 }} />
        <Text style={{ fontSize: 10, textAlign: 'right' }}>20:08</Text>
    </View>
</View>);
class Communicate extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            comment: '',
            line: 0,
            maxHeight: 0,
            commentHeight: 0,
            isSendText: false
        });
    }

    render() {
        const { lang } = this.props;
        const { isSendText } = this.state;
        const btnSendColor = isSendText ? blue5 : gray8;
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ display: 'none' }}>
                    {lang}
                </Text>
                <View style={{ backgroundColor: white, position: 'absolute', top: 0, right: 0, left: 0, bottom: this.state.commentHeight }}>
                    <FlatList
                        data={[{ key: '0' }, { key: '1' }, { key: '2' }, { key: '3' },
                        { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' },
                        { key: '8' }, { key: '9' }, { key: '10' },
                        { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }]}
                        renderItem={({ item }) => (item.key % 2 === 0 ? MyItem : YourIten)}
                    />
                </View>
                <View
                    onLayout={
                        (event) => this.setState({ commentHeight: event.nativeEvent.layout.height })
                    }
                    style={{
                        backgroundColor: white,
                        flexDirection: 'row',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: 'absolute',
                        paddingHorizontal: 3,
                        borderTopColor: gray4,
                        borderTopWidth: 1.1
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 12
                            }}
                        >
                            <MaterialIcons
                                name={'attach-file'}
                                size={24}
                                style={{ transform: [{ rotate: '45deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 6,
                            alignContent: 'stretch',
                        }}
                    >
                        <TextInput
                            style={{
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 13,
                                color: 'transparent'
                            }}
                            multiline
                            underlineColorAndroid='transparent'
                            onContentSizeChange={(event) => {
                                if (this.state.line <= 4 &&
                                    event.nativeEvent.contentSize.height > this.state.maxHeight) {
                                    this.setState(
                                        {
                                            line: this.state.line + 1,
                                            maxHeight: event.nativeEvent.contentSize.height
                                        });
                                } else
                                    if (event.nativeEvent.contentSize.height < this.state.maxHeight) {
                                        this.setState(
                                            {
                                                line: this.state.line - 1,
                                                maxHeight: event.nativeEvent.contentSize.height
                                            });
                                    }
                            }}
                            numberOfLines={this.state.line}
                            value={this.state.comment}
                        />
                        <TextInput
                            style={{
                                alignSelf: 'stretch',
                                position: 'absolute',
                                right: 0,
                                left: 0,
                                bottom: 0,
                                top: 0,
                                fontSize: 13,
                            }}
                            selectionColor={black}
                            onChangeText={(comment) => {
                                this.setState({ comment });
                                if (comment.length) {
                                    this.setState({ isSendText: true });
                                } else {
                                    this.setState({ isSendText: false });
                                }
                            }}
                            underlineColorAndroid='transparent'
                            multiline
                            placeholder='New Message'
                            value={this.state.comment}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 12
                            }}
                        >
                            <MaterialIcons
                                name={'send'}
                                size={24}
                                color={btnSendColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Communicate);
