import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    dates: datesReducer,
    error: errorsReducer
});