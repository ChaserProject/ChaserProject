import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import Color from '../../content/color/Color';
import { fontScale, horizontalScale, height, verticalScale } from '../../utillities/Scale';
import CommonStyle from '../../content/styles/CommonStyle';

const { white, gray2, red } = Color;
const { baseText, smallTextBold } = CommonStyle;

class BadgeTabIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { tintColor, badgeCount } = this.props;
        return (
            <View
                style={{
                    zIndex: 0
                }}
            >
                <MaterialIcons
                    name="public"
                    size={horizontalScale(24)}
                    style={{ color: tintColor }}
                />
                {badgeCount > 0 ?
                    <View
                        style={{
                            position: 'absolute',
                            width: horizontalScale(14),
                            height: horizontalScale(14),
                            top: verticalScale(1.5),
                            right: 0,
                            borderRadius: horizontalScale(7),
                            backgroundColor: red,
                            zIndex: 2
                        }}
                    >
                        <Text
                            style={{
                                color: white,
                                fontSize: 10,
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}
                        >
                            {badgeCount}
                        </Text>
                    </View>
                    : undefined
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        badgeCount: state.badgeCount
    };
}

export default connect(mapStateToProps)(BadgeTabIcon);
