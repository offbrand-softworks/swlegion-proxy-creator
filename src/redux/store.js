import { createStore, compose } from 'redux';
import rootReducer from './reducers';
const initialState = {};

const reduxStore = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default reduxStore;