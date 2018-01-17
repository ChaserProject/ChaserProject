import { createStore, combineReducers } from 'redux';
import LangReducer from '../reducer/LangReducer';
import HomeSearchNameReducer from '../reducer/HomeSearchNameReducer';
import BadgeCountReducer from '../reducer/BadgeCountReducer';
import {
    JobIdToMarkReducer, MarkJobReducer, MarkedJobChangeReducer
} from '../reducer/JobTopBarRightReducer';

const reducer = combineReducers({
    lang: LangReducer,
    homeSearchName: HomeSearchNameReducer,
    isMarked: MarkJobReducer,
    jobIdToMark: JobIdToMarkReducer,
    isMarkedJobChange: MarkedJobChangeReducer,
    badgeCount: BadgeCountReducer
});

const store = createStore(reducer);

export default store;
