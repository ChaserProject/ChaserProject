import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Color from '../../content/color/Color';
import { fontScale } from '../../utillities/Scale';

const { white } = Color;

class JobTopBarRight extends Component {
    render() {
        return (
            <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ padding: fontScale(10) }}>
                    <MaterialIcons
                        size={fontScale(18)}
                        name={'star-border'}
                        style={{ color: this.props.color }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(JobTopBarRight);

