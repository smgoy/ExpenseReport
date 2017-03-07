import { combineReducers } from 'redux';
import UserReducer from './user_reducer';

const MasterReducer = combineReducers({
  user: UserReducer
});

export default MasterReducer;
