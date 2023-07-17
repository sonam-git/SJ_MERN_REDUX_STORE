// imports necessary packages
import {createStore} from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

//to enhance the store with Redux DevTools extension capabilities
const composedEnhancers = composeWithDevTools();

    // creates a Redux store by combining the reducer, initial state, and enhancers.
  const store = createStore(reducer, composedEnhancers);
  
// exporting store
  export default store;