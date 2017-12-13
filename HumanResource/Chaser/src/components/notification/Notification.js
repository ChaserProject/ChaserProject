import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { Languages } from '../../content/languages/Languages';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import Color from '../../content/color/Color';

const { white } = Color;

class Notification extends Component {
    render() {

        const { navigate } = this.props.navigation;

        const Item =
            (<TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 4
                }}
                onPress={() => navigate('JobSreen')}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Image1} style={{ width: 36, height: 36, borderRadius: 18 }} />
                </View>
                <View style={{ flex: 4, justifyContent: 'center' }} >
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 13 }}>
                        Dung nguyen has new post
                </Text>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 10 }}>20:08</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Image3} style={{ width: 36, height: 36 }} />
                </View>
            </TouchableOpacity>);

        return (
            <View>
                <FlatList
                    style={{ backgroundColor: white }}
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' },
                    { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' },
                    { key: 'h' }, { key: 'k' }, { key: 'l' },
                    { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' }]}
                    renderItem={({ item }) => Item}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Notification);
