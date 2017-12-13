import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// import CommonStyle from '../../content/styles/CommonStyle';
// import Color from '../../content/color/Color';

// const { headerNavTitle, headerNav } = CommonStyle;
// const { blue5, white } = Color;

class Help extends Component {
    render() {
        const { lang } = this.props;
        return (
            <View>
                <Text style={{ display: 'none' }}>{lang}</Text>
                <Text>Help</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Help);
