import {createStore} from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();


let preloadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',};

  const store = createStore(reducer, preloadedState, composedEnhancers);

  export default store;