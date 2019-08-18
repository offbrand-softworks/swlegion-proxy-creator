import { combineReducers } from 'redux';
import commandCardReducer from './commandCardReducer'

export default combineReducers({
  commandCardConfig: commandCardReducer
});
