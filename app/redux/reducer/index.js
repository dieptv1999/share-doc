import user from './user_reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  user,
});

export default allReducers;
