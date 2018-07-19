import {
    server_host
} from './api_config';


const getNotificationByUserId = (userId) => {
    return fetch(`${server_host}/service/notification/get_notification_by_user_id/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const readNotification = (notiId, userId) => {
    return fetch(`${server_host}/service/notification/read_notification/${notiId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId
        })
    });
};

module.exports = {
    getNotificationByUserId, readNotification
};

