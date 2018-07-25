import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity,
     Modal, TouchableHighlight, FlatList, ActivityIndicator, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import CommonStyle from '../../content/styles/CommonStyle';
import { width, height, fontScale, verticalScale, horizontalScale } from '../../utillities/Scale';
import {
    getAllProvinces
} from '../../api/ProvinceAPI';
const { baseText, titleText, smallText } = CommonStyle;
const { white, gray2, black } = Color;

class HomeTopBarTitle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            // provinceArr : ['one', 'two', 'three', 'four', 'five' ],
            // province: 'one',
            provinces: [],
            modalVisible: false,
            provinceName:''
        });
        this.provinceStorageName = 'provinceInfo';
    }

    componentWillMount() {
        this.onShowProvinceInStorage();
        this.onGetAllProvinces();
    }

    onShowProvinceInStorage= async ()=>{
        let provinceInfo = null;
        const {dispatch} = this.props;
        await AsyncStorage.getItem(this.provinceStorageName)
            .then(result=>{
                provinceInfo = result;
            })
            .catch(err=>{
                console.log(err);
            });
        provinceInfo = JSON.parse(provinceInfo);
        if(provinceInfo){
            this.state.provinceName = provinceInfo.provinceName;
            this.setState(this.state);
            dispatch({ type: 'SET_PROVINCE_ORDER_ID', provinceOrderId: provinceInfo.provinceOrderId });
        }else{
            this.state.provinceName = 'Chọn tỉnh thành';
            dispatch({ type: 'SET_PROVINCE_ORDER_ID', provinceOrderId: 0 });
            this.setState(this.state);
        }
    }

    onGetAllProvinces=()=>{
        getAllProvinces()
            .then(res=>res.json())
            .then(result=>{
                this.state.provinces = result;
                this.setState(this.state);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onSelectProvince=(prov)=>{
        const {dispatch} = this.props;    
        dispatch({ type: 'SET_PROVINCE_ORDER_ID', provinceOrderId: prov.orderId });
        AsyncStorage.removeItem(this.provinceStorageName);
        const provinceOrderId = prov.orderId;
        const provinceName = prov.provinceName;
        AsyncStorage.setItem(this.provinceStorageName,JSON.stringify({provinceOrderId,provinceName}));
        this.state.provinceName = prov.provinceName;
        this.setState(this.state);
        this.setModalVisible(!this.state.modalVisible);
    }
    
    onRenderItem(prov, navigate) {
        return (
            <TouchableOpacity onPress={()=>this.onSelectProvince(prov)}>
                <View style={styles.listItem}>
                    <Text style={baseText}>{prov.provinceName}</Text>
                </View>
                <View style={{height:1,flex:1, backgroundColor:gray2}} />
            </TouchableOpacity>
        );
    }

    // onRenderPickerItem = ()=>{
    //     let provinceMapArray = this.state.provinceArr.map( (s, i) => {
    //         return <Picker.Item key={i} value={s} label={s} />
    //     });
    //     return provinceMapArray;
    // }

    render() {
        const { provinces, provinceName } = this.state;
        const {navigate} = this.props.navigation;
        let indicatorDisplay = 'none';
        if (!provinces.length) {
            indicatorDisplay = 'flex';
        }

        let indicatorJSX = (
            <View style={{ 
                flex: 1, 
                justifyContent: 'center',
                 alignItems: 'center',
                 display: indicatorDisplay
            }}>
                <ActivityIndicator />
            </View>
        );

        return (
            // <View style={styles.container}>
            //     <Picker 
            //         style={styles.picker}
            //         itemStyle = {[styles.itemStyle, baseText]}
            //         selectedValue={province}
            //         onValueChange={ (province) => {
            //             this.state.province = province;
            //             this.setState(this.state);
            //         }} >
            //         {this.onRenderPickerItem()}
            //     </Picker>
            // </View>   
            <View style={[styles.container]}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        {/* alert('Modal has been closed.'); */}
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalTopSection}>
                            <Text style={[titleText,{fontWeight:'bold', color:white}]}>Chọn tỉnh thành!</Text>
                            <TouchableHighlight
                                onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <MaterialIcons
                                size={fontScale(18)}
                                style={{color:white, fontWeight:'bold'}}
                                name={'clear'}
                            />
                            </TouchableHighlight>
                        </View>
                        <View style={{height:1,width:width, backgroundColor:gray2}} />
                        <View style={styles.modalBotSection}>
                            <FlatList
                                style={{}}
                                data={provinces}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item }) => this.onRenderItem(item, navigate)}
                                numColumns={1}
                            />
                        </View>
                    </View>
                </Modal>
        
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                    style={styles.touchable}
                >
                    <Text style={[{},titleText, styles.title]}>{provinceName}</Text>
                </TouchableHighlight>
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
        width: width/3, 
        height: width/5,
        color: white
    },
    itemStyle:{
        textAlign: 'center'
    },
    modal:{
        flex:1
    },
    touchable:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    title:{
        color:white
    },
    modalTopSection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:horizontalScale(13),
        backgroundColor:black
    },
    modalBotSection:{
        flex:9
    },
    listItem:{
        paddingHorizontal: horizontalScale(15),
        height: verticalScale(50),
        justifyContent:'center',
        flex:1,
    }
});

function mapStateToProps(state) {
    return { lang: state.lang, provinceOrderId: state.provinceOrderId };
}

export default connect(mapStateToProps)(HomeTopBarTitle);

