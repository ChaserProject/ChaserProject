import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'; //Step 1
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Color from '../../content/color/Color';
import { width, height, fontScale, verticalScale, horizontalScale } from '../../utillities/Scale';

const { white, gray2, black, gray4, blue5, whiteBlue } = Color;

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {     //Step 2
            up: 'chevron-left',
            down: 'chevron-right'
        };

        this.state = {       //Step 3
            title: props.title,
            expanded: false,
            animation: new Animated.Value(40),
            maxHeight: 0,
            minHeight: 0
        };
    }

    setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    toggle() {
        // const initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight;
        const finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded  //Step 2
        });

        // this.state.animation.setValue(40);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }

    render() {
        let icon = this.icons.down;

        if (this.state.expanded) {
            icon = this.icons.up;   //Step 4
        }

        //Step 5
        return (
            <Animated.View
                style={[styles.container, { height: this.state.animation }]}
            >
                <View style={styles.titleContainer} onLayout={this.setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1"
                    >
                        {/* <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image> */}
                        <MaterialIcons
                            size={18}
                            name={icon}
                            style={styles.buttonImage}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.body} onLayout={this.setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        overflow: 'hidden',
        shadowColor: gray4,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset:
            { width: 1, height: 1 },
        // padding: fontScale(10),
        width: width - fontScale(20),
        borderRadius: fontScale(5),
        flex: 1,
        marginVertical: fontScale(5),
    },
    titleContainer: {
        flexDirection: 'row',
        height: 40,
    },
    title: {
        flex: 9,
        padding: fontScale(10),
        // color: '#2a2f43',
        fontWeight: 'bold',
        alignSelf: 'center',
        // paddingVertical: verticalScale(5),
        fontSize: fontScale(13)
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {

    },
    body: {
        paddingBottom: verticalScale(10),
        paddingHorizontal: horizontalScale(20),
        paddingTop: 0
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Panel);

