const BadgeCountReducer = (state = 0, action) => {
    if (action.type === 'SET_BADGE_COUNT') return action.count;
    return state;
};

export default BadgeCountReducer;
