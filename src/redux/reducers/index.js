import { combineReducers } from 'redux';
import commandCardReducer from './commandCardReducer'
import unitCardReducer from './unitCardReducer'

export default combineReducers({
  commandCardConfig: commandCardReducer,
  unitCardConfig: unitCardReducer
});
