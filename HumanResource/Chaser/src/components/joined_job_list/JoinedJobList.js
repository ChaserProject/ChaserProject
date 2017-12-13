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
import { width, height, fontScale, verticalScale, horizontalScale } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, whiteBlue, brownBlack, yellow2 } = Color;

class JoinedJobList extends Component {
    constructor(props) {
        super(props);
        this.state = ({

        });
    }

    onRenderItem(item, navigate) {
        return (<View
            style={{
                width: width - horizontalScale(24),
                height: verticalScale(100),
                marginHorizontal: horizontalScale(12),
                marginVertical: verticalScale(5),
                borderRadius: fontScale(5),
                backgroundColor: white,
                shadowOpacity: 1,
                shadowColor: black,
                shadowRadius: 1,
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                flexDirection: 'row'
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={HouseWork} style={{ width: fontScale(56), height: fontScale(56) }} />
            </View>
            <View style={{ flex: 3, paddingRight: horizontalScale(10) }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', paddingTop: verticalScale(6) }}>
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'star-border'}
                        style={{ color: yellow2 }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: brownBlack, fontWeight: 'bold', fontSize: fontScale(13) }}>Clean House sad sad sad sad sad asd asd sad sad sa</Text>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={{ fontSize: fontScale(11) }}>Vim company sad asd sad  jshgad ashdg shadg sadgs agd jsagds gds gdsdg sd gsad gsadg sdg shagd shagdgas dgs hjags hdgasd gsa dgsaj asd sad sad adssadas asd sad asd sa</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', paddingBottom: verticalScale(4), paddingTop: verticalScale(6) }} onPress={() => navigate('JobSreen')}>
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'forward'}
                        style={{ color: gray4 }}
                    />
                </TouchableOpacity>
            </View>
        </View>);
    }

    render() {
        const { navigate } = this.props.navigation;
        const { lang } = this.props;

        return (
            <View style={{ flex: 1, paddingVertical: 10, backgroundColor: whiteBlue }}>
                <Text style={{ display: 'none' }}>{lang}</Text>
                <FlatList
                    style={{}}
                    data={[{ key: '0' },
                    { key: '1' },
                    { key: '2' },
                    { key: '3' },
                    { key: '4' },
                    { key: '5' }]}
                    renderItem={({ item }) => this.onRenderItem(item, navigate)}
                    numColumns={1}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(JoinedJobList);

