import {
    server_host
} from './api_config';

const getUserIdentity = (userToken) => {
    return fetch(`${server_host}/service/user/get_user_identity_by_token`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`
        }
    });
};

module.exports = { getUserIdentity };

