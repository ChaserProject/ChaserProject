import {
    server_host
} from './api_config';

const getUserByUserId = (userId) => {
    return fetch(`${server_host}/service/user/get_user_by_id/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

module.exports = {
    getUserByUserId
}