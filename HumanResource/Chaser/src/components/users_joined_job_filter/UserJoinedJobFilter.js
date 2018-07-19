import React, { Component } from 'react';
import { 
    View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput
 } from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Languages } from '../../content/languages/Languages';
import Color from '../../content/color/Color';
import CommonStyle from '../../content/styles/CommonStyle';
import {
    width, height, verticalScale,
    fontScale, horizontalScale
} from '../../utillities/Scale';
import Image1 from '../../content/images/LoginBackGround1.png';
import Image2 from '../../content/images/LoginBackGround2.jpg';
import Image3 from '../../content/images/LoginBackGround3.jpg';
import {
    onGetUserIdentityId
} from '../../utillities/UserIdentity';
import { getJoinedUsers } from '../../api/JobAPI';

const {
    white, gray2, black, gray4, blue5, brownLightGray,
    whiteBlue, orange2, blue3, blue7, green3
} = Color;
const { baseText, smallText, baseBoldText } = CommonStyle;

class UserJoinedJobFilter extends Component {
     constructor(props) {
         super(props);
         this.state = {
             users : [],
             amount : '10'
         };
         this.params = this.props.navigation.state.params;
     }

     componentWillMount() {
         const params = this.params;
         const {jobId} = params;
         console.log(jobId);
         console.log(this.state.amount);
         this.onGetJoinedUsers(jobId, this.state.amount);
     }

     onGetJoinedUsers = async (jobId,amount) =>{
        getJoinedUsers(jobId,amount)
        .then(async (result)=>{
            const res = await result.json();
            this.state.users = res;
            console.log(res);
            this.setState(this.state);
        })
        .catch(err=>{
            console.log(err);
        });
     }

     onRenderItem(user, navigate) {
        return (<TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: fontScale(15)
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={baseBoldText}>{this.state.users.indexOf(user) + 1}</Text>
                </View>
                <View
                    style={{
                        flex: 6,
                        justifyContent: 'center',
                        paddingHorizontal: horizontalScale(7)
                    }}
                >
                    <View style={{
                        flexDirection:'row',
                        //justifyContent:'space-between'
                    }}>
                        <Text style={baseBoldText}>Tên:</Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                            style={[baseText,{ fontWeight:'bold' }]}
                            > {user.userName}
                        </Text>
                        {/* <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={[smallText,{ marginTop:verticalScale(2) }]}
                        >
                            {user.createdDate}
                        </Text> */}
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[smallText,{ fontStyle:'italic' }]}>Sđt:</Text>
                        <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={[smallText,{ fontStyle:'italic' }]}
                        > {user.mobile}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: gray2 }} />
        </TouchableOpacity>);
    }

    render() {
        // const { lang } = this.props;
        const { navigate } = this.props.navigation;
        const { users } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.filter_container}>
                    <Text style={styles.txt_amount}>Số lượng: </Text>
                    <TextInput
                        style={styles.edt_amount}
                        onChangeText={(amount) => this.setState({amount})}
                        keyboardType='numeric'
                        value={this.state.amount}
                    />
                     <TouchableOpacity 
                        style={[styles.btnJoin]}
                        onPress={()=>this.onGetJoinedUsers(this.params.jobId,this.state.amount)}
                    >
                        <MaterialIcons
                            size={fontScale(14)}
                            name={'format-list-numbered'}
                            style={{ color: white }}
                        />
                        <Text style={[smallText, { color: white, fontWeight: 'bold' }]}> Lọc</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flat_list}>
                    <FlatList
                        style={{ backgroundColor: white }}
                        data={users}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => this.onRenderItem(item, navigate)}
                        numColumns={1}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteBlue,
    },
    txt_amount:{alignSelf:'center'},
    edt_amount:{
        paddingHorizontal:horizontalScale(5),
        width: horizontalScale(30)
    },
    filter_container: {
        flex: 1,
        backgroundColor: whiteBlue,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    flat_list:{
        flex: 9
    },
    btnJoin: {
        flexDirection: 'row',
        padding: fontScale(5),
        borderRadius: fontScale(4),
        backgroundColor: blue5,
        marginLeft: fontScale(5)
    },
});

function mapStateToProps(state) {
    return { lang: state.lang };
}

export default connect(mapStateToProps)(UserJoinedJobFilter);