// imports necessary packages
import {createStore} from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

//to enhance the store with Redux DevTools extension capabilities
const composedEnhancers = composeWithDevTools();

// an object that represents the initial state of the Redux store. 
let preloadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',};

    // creates a Redux store by combining the reducer, initial state, and enhancers.
  const store = createStore(reducer, preloadedState, composedEnhancers);
  
// exporting store
  export default store;