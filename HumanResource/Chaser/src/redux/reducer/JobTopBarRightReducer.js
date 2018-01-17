const MarkJobReducer = (state = false, action) => {
    if (action.type === 'SET_MARKED') return action.isMarked;
    return state;
};

const JobIdToMarkReducer = (state = '', action) => {
    if (action.type === 'SET_JOB_ID_TO_MARKED') return action.id;
    return state;
};

const MarkedJobChangeReducer = (state = false, action) => {
    if (action.type === 'CHANGE_MARKED_JOB') return !state;
    return state;
};

module.exports = {
    MarkJobReducer,
    JobIdToMarkReducer,
    MarkedJobChangeReducer
};
