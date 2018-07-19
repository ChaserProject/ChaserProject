
const tokenReducer = (state = false, action) => {
    if (action.type === 'SET_TOKEN') return true;
    if (action.type === 'REMOVE_TOKEN') return false;
    return state;
};

export default tokenReducer;
