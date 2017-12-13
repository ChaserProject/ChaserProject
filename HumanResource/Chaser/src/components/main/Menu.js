import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Languages, setLanguage } from '../../content/languages/Languages';

class Menu extends Component {

    click() {
        setLanguage('en');
        this.props.dispatch({ type: 'SET_ENGLISH_LANGUAGE' });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    Menu
                </Text>
                <TouchableOpacity onPress={() => navigate('DrawerClose')}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.click()} style={{ alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Change Language</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('ProfileScreen')} style={{ alignSelf: 'center' }}>
                    <Text style={{}}>Profile</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(Menu);
