import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { fontScale } from '../../utillities/Scale';

const { white } = Color;

class JobListTopBarTitle extends Component {
    render() {
        return (
            <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: white, fontSize: fontScale(20), fontWeight: 'bold' }}>{Languages.JobList}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(JobListTopBarTitle);

