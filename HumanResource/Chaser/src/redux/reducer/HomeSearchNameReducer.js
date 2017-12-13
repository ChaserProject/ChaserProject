const HomeSearchNameReducer = (state = '', action) => {
    if (action.type === 'SET_HOME_SEARCH_NAME') return action.name;
    return state;
};

export default HomeSearchNameReducer;
