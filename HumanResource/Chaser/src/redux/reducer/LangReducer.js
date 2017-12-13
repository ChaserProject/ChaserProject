
const langReducer = (state = 'vn', action) => {
    if (action.type === 'SET_ENGLISH_LANGUAGE') return 'en';
    if (action.type === 'SET_VIETNAM_LANGUAGE') return 'vn';
    return state;
};

export default langReducer;
