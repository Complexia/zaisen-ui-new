import { combineReducers } from 'redux';
import accountReducer from './store';

const rootReducer = combineReducers({
  account: accountReducer,
  // add any other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
