import { combineReducers } from 'redux';
import history from './history';

const rootReducer = combineReducers({
  history: history,
});

export default rootReducer;
