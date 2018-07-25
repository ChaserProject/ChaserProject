const provinceIdReducer = (state = 0, action) => {
    if (action.type === 'SET_PROVINCE_ORDER_ID') return action.provinceOrderId;
    return state;
};

export default provinceIdReducer;
