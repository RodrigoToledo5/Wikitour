import countrySearch from './reducerSearch';
import postActivity from './reducersPost';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({countrySearch,postActivity})

export default rootReducer;