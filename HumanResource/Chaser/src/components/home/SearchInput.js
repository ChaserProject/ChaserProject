
import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, Picker, TextInput, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Languages, setLanguage } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { width, height, fontScale, verticalScale } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, brownPurple, brownLightGray, pink2,bluelight } = Color;

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            hideInput: width,
            slideSearchInputAnim: new Animated.Value(width)
        });
    }

    onShowOrHideInput(value) {
        this.setState({ hideInput: value });
        Animated.timing(
            this.state.slideSearchInputAnim,
            {
                toValue: value,
                duration: 100
            }
        ).start();
    }

    render() {
        // const { navigate } = this.props.navigation;
        const { hideInput } = this.state;
        const {dispatch} = this.props;
        return (
            <View
                style={{
                    paddingVertical: verticalScale(10),
                    width: width * (3 / 4),
                    justifyContent: 'space-around',
                    marginRight: verticalScale(20)
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Animated.View
                        style={{
                            right: this.state.slideSearchInputAnim,
                            flex: 1
                        }}
                    >
                        <TextInput
                            style={{
                                fontSize: fontScale(13),
                                paddingVertical: 0,
                                marginVertical: 0,
                                paddingHorizontal: fontScale(10),
                                flex: 1,
                                color: white,
                                backgroundColor: brownPurple,
                                borderBottomLeftRadius: fontScale(5),
                                borderTopLeftRadius: fontScale(5),
                                fontWeight: 'bold'
                            }}
                            onChangeText={(name) => {
                                this.setState({ name });
                                dispatch({ type: 'SET_HOME_SEARCH_NAME', name });
                            }}
                            underlineColorAndroid='transparent'
                            placeholder={Languages.MainSearch}
                            value={this.state.name}
                            selectionColor={white}
                        />
                    </Animated.View>
                    <TouchableOpacity onPress={() => {
                            if(hideInput === width){
                                this.state.name='';
                                this.setState(this.state);
                                dispatch({ type: 'SET_HOME_SEARCH_NAME', name:'' });
                                this.onShowOrHideInput(0);
                            }else {
                                this.onShowOrHideInput(width);
                            }
                        }}>
                        <MaterialIcons
                            name={'search'}
                            size={fontScale(24)}
                            style={{
                                alignSelf: 'center',
                                padding: fontScale(5),
                                backgroundColor: brownLightGray,
                                color: bluelight,
                                borderBottomLeftRadius: hideInput === width ? fontScale(5) : 0,
                                borderTopLeftRadius: hideInput === width ? fontScale(5) : 0,
                                borderTopRightRadius: fontScale(5),
                                borderBottomRightRadius: fontScale(5)
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang, homeSearchName: state.homeSearchName };
}

export default connect(mapStateToProps)(SearchInput);

