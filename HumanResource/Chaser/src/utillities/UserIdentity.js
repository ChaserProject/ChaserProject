import {
    AsyncStorage
} from 'react-native';
import {
    getUserIdentity
} from '../api/JsonWebTokenAPI';

const onGetUserIdentityId = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const userToken = await AsyncStorage.getItem(tokenName);
            if (userToken) {
                getUserIdentity(userToken)
                    .then(res => res.json())
                    .then(resJson => {
                        if (resJson.userIdentity) {
                            const userId = resJson.userIdentity.id;
                            resolve(userId);
                        } else {
                            reject(null);
                        }
                    })
                    .catch(err => reject(err));
            } else {
                reject(null);
            }
        } catch (err) {
            reject(err);
        }
    });
}

const onGetUserIdentityRole = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const userToken = await AsyncStorage.getItem(tokenName);
            if (userToken) {
                getUserIdentity(userToken)
                    .then(res => res.json())
                    .then(resJson => {
                        console.log('res: ', resJson);
                        if (resJson.userIdentity) {
                            const userRole = resJson.userIdentity.role;
                            resolve(userRole);
                        } else {
                            reject(null);
                        }
                    })
                    .catch(err => reject(err));
            } else {
                reject(null);
            }
        } catch (err) {
            reject(err);
        }
    });
}

const removeToken = async ()=>{
    await AsyncStorage.removeItem(tokenName);
}

const setToken = async(token)=>{
    await AsyncStorage.setItem(tokenName, token);
}

const adminRoleName = "admin";
const userRoleName = "user";
const employerRoleName = "employer";
const tokenName = 'userToken';

module.exports = {
    onGetUserIdentityId,
    onGetUserIdentityRole,
    adminRoleName,
    userRoleName,
    employerRoleName,
    tokenName,
    removeToken,
    setToken
}