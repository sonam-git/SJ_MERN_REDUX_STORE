// imports the useReducer hook from the React library
import { useReducer } from "react";
// imports a set of action types 
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";


// function to manage/update the state by receiving dispatched actions 
export const reducer = (state, action) => {
  switch (action.type) {
// Updates the products property of the state with a new array of products received from the action payload.
    case UPDATE_PRODUCTS:
      return {
        //  spread the copy of existing state
        ...state,
        //  update the relevant properties of the state.
        products: [...action.products],
      };

// Adds a new product to the cart property of the state.
    case ADD_TO_CART:
      return {
        //spreads the existing state object
        ...state,
        cartOpen: true, //This suggests that the cart is open or visible.
        // creates a new array
        // spreads the existing items in state.cart and adds a new item (action.product) at the end of the array.
        cart: [...state.cart, action.product],
      };

 // Adds multiple products to the cart property of the state.
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

 // Updates the purchaseQuantity property of a specific product in the cart array based on the action payload.
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        // creates a new array for the cart property by mapping over each product in the existing state.cart array.
        cart: state.cart.map(product => {
          // checks if the _id property of the action matches the _id property of the current product in the loop
          if (action._id === product._id) {
            // updates the purchaseQuantity
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

// Removes a product from the cart array based on the action payload.
    case REMOVE_FROM_CART:
      // initializes a variable newState
      // function compares the _id property of each product with the _id property of the action to determine if they are not equal.
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState //resulting filtered array is assigned to newState.
      };

// Clears the cart array and sets cartOpen to false.
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false, //indicates that the cart is closed or not visible.
        cart: [] //sets the cart property of the new state to an empty array. 
      };

//  Toggles the value of cartOpen property.
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen //sets the cartOpen property of the new state to the opposite value of the current cartOpen property
      };

// Updates the categories property of the state with a new array of categories received from the action payload.
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories], //sets the categories property of the new state to a new array 
      };

 // Updates the currentCategory property of the state with the value received from the action payload.
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

// Returns the current state if the dispatched action does not match any of the defined cases.
    default:
      return state;
  }
};
// exports hooks
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}