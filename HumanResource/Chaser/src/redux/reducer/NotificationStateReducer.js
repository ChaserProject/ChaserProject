const NotificationStateReducer = (state = false, action) => {
    if (action.type === 'CHANGE_NOTIFICATION_STATE') return !state;
    return state;
};

export default NotificationStateReducer;