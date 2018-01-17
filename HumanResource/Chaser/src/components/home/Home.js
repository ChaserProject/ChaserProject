import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker, TextInput, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import Concert from '../../content/images/Concert.png';
import HouseWork from '../../content/images/HouseWork.png';
import Security from '../../content/images/Security.png';
import PGPB from '../../content/images/PGPB.png';
import FaceModel from '../../content/images/FaceModel.png';
import Sell from '../../content/images/Sell.png';

import { width, height } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, bluegreen } = Color;

class HomeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            language: 'vn',
            imgArrs: [Concert, HouseWork, Sell, Security, PGPB, FaceModel]
        });
    }

    onLanguageChange(itemValue) {
        setLanguage(itemValue);
        this.setState({ language: itemValue });
        if (itemValue === 'en') {
            this.props.dispatch({ type: 'SET_ENGLISH_LANGUAGE' });
        } else {
            this.props.dispatch({ type: 'SET_VIETNAM_LANGUAGE' });
        }
    }

    onRenderItem(item, navigate) {
        return (<TouchableOpacity onPress={() => navigate('JobListSreen', { key: item.key })}>
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
                    source={this.state.imgArrs[item.key]} style={{ width: 100, height: 100 }}
                />
                <Text style={{ color: item.color, fontWeight: 'bold', fontSize: 14 }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { lang } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Text style={{ display: 'none' }}>{lang}</Text>
                <FlatList
                    data={[{ key: '3', title: 'Sự kiện', bgColor: '#419b05', color: '#FFF8E1' },
                    { key: '4', title: 'Việc nhà', bgColor: '#52c405', color: '#FFF8E1' },
                    { key: '2', title: 'Bán hàng', bgColor: '#04d34a', color: '#FFF8E1' },
                    { key: '1', title: 'Bảo vệ', bgColor: '#05a83c', color: '#FFF8E1' },
                    { key: '5', title: 'Quảng cáo', bgColor: '#06a857', color: '#FFF8E1' },
                    { key: '6', title: 'Mẫu', bgColor: '#11f985', color: '#FFF8E1' }]}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={2}
                //ListHeaderComponent={Header}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(HomeIndex);

