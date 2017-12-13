
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Image2 from '../../content/images/LoginBackGround2.jpg';

const { gray2, white, blue5 } = Color;
const Item = (
    <View style={{ flexDirection: 'row', alignContent: 'stretch', backgroundColor: white, paddingHorizontal: 10, paddingVertical: 15, marginBottom: 1 }}>
        <Image source={Image2} style={{ width: 40, height: 40, borderRadius: 20, alignSelf: 'center' }} />
        <View style={{ flex: 7, justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text>Dung Nguyen</Text>
            <Text>TP.HCM</Text>
        </View>
        <TouchableOpacity style={{ flex: 3, justifyContent: 'center', borderRadius: 5, backgroundColor: blue5, flexDirection: 'row', marginVertical: 5, paddingHorizontal: 5 }}>
            <MaterialIcons
                name={'check'}
                size={14}
                style={{
                    alignSelf: 'center',
                    marginLeft: 5,
                    fontWeight: 'bold'
                }}
                fontWeight={'bold'}
                color={white}
            />
            <Text style={{ alignSelf: 'center', color: white, paddingHorizontal: 5, fontWeight: 'bold' }}>Following</Text>
        </TouchableOpacity>
    </View >
);

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        const { lang } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ display: 'none' }}>
                    {lang}
                </Text>
                <View style={{ flex: 1, backgroundColor: gray2, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 9, paddingVertical: 10, paddingLeft: 10, justifyContent: 'center' }}>
                        <View
                            style={{
                                backgroundColor: white,
                                flexDirection: 'row',
                                borderRadius: 10,
                                borderColor: gray2,
                                borderWidth: 1
                            }}
                        >
                            <MaterialIcons
                                name={'search'}
                                size={24}
                                style={{ alignSelf: 'center', margin: 5 }}
                            />
                            <TextInput
                                style={{
                                    fontSize: 13,
                                    paddingVertical: 0,
                                    marginVertical: 0,
                                    flex: 1
                                }}
                                onChangeText={(name) => {
                                    this.setState({ name });
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='Enter Name'
                                value={this.state.name}
                                selectionColor='black'
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={{ flex: 2, alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 9, backgroundColor: gray2 }}>
                    <FlatList
                        data={[{ key: '0' }, { key: '1' }, { key: '2' }, { key: '3' },
                        { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' },
                        { key: '8' }, { key: '9' }, { key: '10' },
                        { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }]}
                        renderItem={({ item }) => Item}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Friend);
