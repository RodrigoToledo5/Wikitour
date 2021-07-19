import countrySearch from './reducerSearch';
import scoreTable from './scoreTable';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({countrySearch,scoreTable})

export default rootReducer;