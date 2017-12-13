
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { fontScale, horizontalScale } from '../../utillities/Scale';
import Color from '../../content/color/Color';

const { brownGray } = Color;

class ButtonShowMenu extends Component {
    constructor(props) {
        super(props);
        this.state = ({

        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
                <MaterialIcons
                    name={'menu'}
                    size={fontScale(24)}
                    style={{ color: brownGray, paddingHorizontal: horizontalScale(20) }}
                />
            </TouchableOpacity>
        );
    }
}

export default ButtonShowMenu;

