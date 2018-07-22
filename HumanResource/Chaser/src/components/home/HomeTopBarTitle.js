import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import { fontScale } from '../../utillities/Scale';
import { width } from '../../utillities/Scale';
import CommonStyle from '../../content/styles/CommonStyle';
const { baseText, titleText, smallText } = CommonStyle;

const { white } = Color;

class HomeTopBarTitle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            provinceArr : ['one', 'two', 'three', 'four', 'five' ],
            province: 'one'
        });
    }

    onRenderPickerItem = ()=>{
        let provinceMapArray = this.state.provinceArr.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        return provinceMapArray;
    }

    render() {
        const { province } = this.state;
        
        return (
            <View style={styles.container}>
                <Picker 
                    style={styles.picker}
                    itemStyle = {[styles.itemStyle, baseText]}
                    selectedValue={province}
                    onValueChange={ (province) => {
                        this.state.province = province;
                        this.setState(this.state);
                    }} >
                    {this.onRenderPickerItem()}
                </Picker>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        alignSelf: 'center',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    picker:{ 
        backgroundColor:'red',
        width: width/3, 
        height: width/5,
        color: white
    },
    itemStyle:{
        textAlign: 'center'
    }
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(HomeTopBarTitle);

