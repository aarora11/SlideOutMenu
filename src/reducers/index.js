import { combineReducers } from 'redux';
import patientReducer from './reducer_patient';
const rootReducer = combineReducers({
  patients : patientReducer
});

export default rootReducer;
