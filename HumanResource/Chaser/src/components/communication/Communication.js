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

class Communication extends Component {
    render() {
        const { lang } = this.props;
        const { navigate } = this.props.navigation;
        const Item =
            (<TouchableOpacity
                onPress={() => navigate('CommunicationRouter')}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 8
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Image1} style={{ width: 36, height: 36, borderRadius: 18 }} />
                </View>
                <View style={{ flex: 8, paddingHorizontal: 5 }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 13, color: black, flex: 9 }}>
                            Dung nguyen
                    </Text>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 11 }}>20:08</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 11 }}>askdj haskjdh sajkdh asjkdh sakjdh askjhd skjadh askjhd skjahd jkashdkjsa hdkj shadkj sha jkdsah djkashkjdhasjk dhaskjd hsk</Text>
                    </View>
                </View>
            </TouchableOpacity>);
        return (
            <View style={{ flex: 1, backgroundColor: white }}>
                <Text style={{ display: 'none' }}>
                    {lang}
                </Text>
                <FlatList
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

export default connect(mapStateToProps)(Communication);
