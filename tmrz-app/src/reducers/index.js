import { combineReducers } from 'redux';

import timerReducer from './timersReducer';
import selectedTimeReducer from './selectedTimerReducer';

export default combineReducers({
  timers: timerReducer,              // array
  selectedTimer: selectedTimeReducer, // int/number
});