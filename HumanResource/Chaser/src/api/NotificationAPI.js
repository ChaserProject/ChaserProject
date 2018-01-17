const getNotificationByUserId = (userId) => {
    return fetch(`http://192.168.135.1:3000/service/notification/get_notification_by_user_id/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const readNotification = (notiId, userId) => {
    return fetch(`http://192.168.135.1:3000/service/notification/read_notification/${notiId}`, {
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

