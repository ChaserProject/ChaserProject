
const tokenReducer = (state = false, action) => {
    if (action.type === 'SET_TOKEN') return !state;
    return state;
};

export default tokenReducer;
