import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Avatar from '../../content/images/Avatar.jpg';
import { width, height } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, brownBlack } = Color;

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            line: 0,
            maxHeight: 0,
            commentHeight: 0,
            isSendText: false
        };
    }
    render() {
        const { lang } = this.props;
        const { navigate } = this.props.navigation;
        const Item = (
            <View
                comment item
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    backgroundColor: '#EEE',
                    paddingVertical: 10
                }}
            >
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={Avatar} style={{ width: 30, height: 30, borderRadius: 15 }} />
                </View>
                <View style={{ flex: 9, justifyContent: 'center', paddingHorizontal: 5 }} >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                flex: 9
                            }}
                        >
                            Dung Nguyen
                        </Text>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                        >
                            <MaterialIcons
                                name={'more-horiz'}
                                size={12}
                                color={gray4}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={{
                            fontSize: 13
                        }}
                    >
                        Hello my name Dung
                    </Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                        <Text
                            style={{
                                fontSize: 11
                            }}
                        >
                            July 17:50
                        </Text>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <Text
                            style={{
                                fontSize: 11
                            }}
                        >
                            Fixed
                        </Text>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 11
                                }}
                            >
                                Love
                        </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <TouchableOpacity
                            onPress={() => navigate('Reply')}
                        >
                            <Text
                                style={{
                                    fontSize: 11
                                }}
                            >
                                Reply
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );

        const ItemImage = (
            <View
                comment item
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    backgroundColor: '#EEE',
                    paddingVertical: 10
                }}
            >
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image source={Avatar} style={{ width: 30, height: 30, borderRadius: 15 }} />
                </View>
                <View style={{ flex: 9, justifyContent: 'center', paddingHorizontal: 5 }} >
                    <View style={{ height: 30, flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                textAlignVertical: 'center',
                                flex: 9
                            }}
                        >
                            Dung Nguyen
                        </Text>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                        >
                            <MaterialIcons
                                name={'more-horiz'}
                                size={12}
                                color={gray4}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image style={{ height: width / 3, width: width / 3, marginTop: 5 }} source={Avatar} />
                    <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                        <Text
                            style={{
                                fontSize: 11
                            }}
                        >
                            July 17:50
                        </Text>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <Text
                            style={{
                                fontSize: 11
                            }}
                        >
                            Fixed
                        </Text>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 11
                                }}
                            >
                                Love
                        </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>-</Text>
                        <TouchableOpacity
                            onPress={() => navigate('Reply')}
                        >
                            <Text
                                style={{
                                    fontSize: 11
                                }}
                            >
                                Reply
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
        const btnSendText = (<TouchableOpacity style={{}}>
            <MaterialIcons
                name={'send'}
                size={24}
                color={blue5}
            />
        </TouchableOpacity>);
        const btnSendIcon = (<TouchableOpacity style={{}}>
            <MaterialIcons
                name={'tag-faces'}
                size={24}
                color={gray4}
            />
        </TouchableOpacity>);
        const { isSendText } = this.state;
        const commentRightSection = isSendText ? btnSendText : btnSendIcon;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={brownBlack} barStyle="light-content" />
                <View
                    style={{
                        backgroundColor: brownBlack,
                        position: 'absolute',
                        height: 50,
                        alignSelf: 'stretch',
                        left: 0,
                        top: 0,
                        right: 0
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: white,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomColor: gray4,
                            borderBottomWidth: 1,
                            flex: 1
                        }}
                    >
                        <TouchableOpacity style={{ flex: 9, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                            <MaterialIcons
                                name={'favorite'}
                                size={18}
                                color={'red'}
                            />
                            <Text
                                numberOfLines={2}
                                ellipsizeMode={'tail'}
                                style={{ flex: 1, paddingHorizontal: 10 }}
                            >
                                Dung Nguyen and 215 another
                        </Text>
                            <MaterialIcons
                                name={'visibility'}
                                size={18}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons
                                name={'favorite-border'}
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 50, right: 0, left: 0, bottom: this.state.commentHeight }}>
                    <FlatList
                        data={[{ key: '0' }, { key: '1' }, { key: '2' },
                        { key: '3' }, { key: '4' }, { key: '5' }]}
                        renderItem={({ item }) => item.key % 2 ? Item : ItemImage}
                    />
                </View>
                <View
                    onLayout={
                        (event) => this.setState({ commentHeight: event.nativeEvent.layout.height })
                    }
                    style={{
                        backgroundColor: brownBlack,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: 'absolute'
                    }}
                >
                    <View
                        //comment item
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            backgroundColor: white,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{}}>
                                <MaterialIcons
                                    name={'photo-camera'}
                                    size={24}
                                    color={gray4}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center' }} >
                            <TextInput
                                style={{
                                    flex: 1,
                                    fontSize: 13,
                                    color: 'transparent'
                                }}
                                multiline
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
                                underlineColorAndroid='transparent'
                                value={this.state.comment}
                            />
                            <TextInput
                                style={{
                                    flex: 1,
                                    fontSize: 13,
                                    position: 'absolute',
                                    alignSelf: 'stretch',
                                    right: 0,
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                }}
                                onChangeText={(comment) => {
                                    this.setState({ comment });
                                    if (comment.length) {
                                        this.setState({ isSendText: true });
                                    } else {
                                        this.setState({ isSendText: false });
                                    }
                                }}
                                multiline
                                underlineColorAndroid='transparent'
                                placeholder='Write a comment'
                                value={this.state.comment}
                                selectionColor='black'
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {commentRightSection}
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Comment);

{/* <View
                        //comment item
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            backgroundColor: '#EEE'
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={Avatar} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center', paddingHorizontal: 5 }} >
                            <TextInput
                                style={{
                                    flex: 1
                                }}
                                onChangeText={(comment) => {
                                    this.setState({ comment });
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Write a comment'
                                value={this.state.comment}
                                selectionColor='black'
                            />
                        </View>
                        <View style={{ flex: 1.5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{}}>
                                <MaterialIcons
                                    name={'photo-camera'}
                                    size={24}
                                    color={gray4}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}>
                                <MaterialIcons
                                    name={'tag-faces'}
                                    size={24}
                                    color={gray4}
                                />
                            </TouchableOpacity>
                        </View>
                    </View> */}