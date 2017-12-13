import { createStore, combineReducers } from 'redux';
import LangReducer from '../reducer/LangReducer';
import HomeSearchNameReducer from '../reducer/HomeSearchNameReducer';

const reducer = combineReducers({
    lang: LangReducer,
    homeSearchName: HomeSearchNameReducer
});

const store = createStore(reducer);

export default store;
