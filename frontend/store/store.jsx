import { createStore } from 'redux';
import MasterMiddleware from '../middleware/master_middleware';
import MasterReducer from '../reducers/master_reducer';

export default (preloadedState = {}) => (
  createStore(
    MasterReducer,
    preloadedState,
    MasterMiddleware
  )
);
