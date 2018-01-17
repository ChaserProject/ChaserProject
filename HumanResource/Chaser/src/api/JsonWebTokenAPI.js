const getUserIdentity = (userToken) => {
    return fetch('http://192.168.135.1:3000/service/user/get_user_identity_by_token', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`
        }
    });
};

module.exports = { getUserIdentity };

