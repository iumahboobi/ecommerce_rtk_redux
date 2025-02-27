import { createSlice } from '@reduxjs/toolkit'


//First, initialize an empty array named cartItems outside CartSlice.
const initialState = {
    cartItems: [],
  };

const CartSlice = createSlice({
    name: 'cart', // name of the slice
    initialState, // an Object representing the initial state of the slice
  
    reducers: {
      // add item to cart
      addItemToCart(state, action) {
        const existingItem = state.cartItems.find(
          (item) => item.id === action.payload.id,
        )
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 })
        }
      },
  
      // remove item from cart
      removeItemFromCart(state, action) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        )
      },
  
      // clear all cart items
      clearCart(state) {
        state.cartItems = []
      },
  
      // increase item quantity
      //State represents the current state of the Redux store. It typically includes the data relevant to the application.
      //Action is an object that contains a type property and additional data that is required to update the state.In this case, action.payload likely contains the identifier (id) of the item whose quantity needs to be increased.
  
      increaseItemQuantity(state, action) {
        const itemToIncrease = state.cartItems.find(
          (item) => item.id === action.payload.id,
        )
        if (itemToIncrease) {
          itemToIncrease.quantity += 1
        }
      },
  
      // comments are same as above but with decrease item quantity
      decreaseItemQuantity(state, action) {
        const itemToDecrease = state.cartItems.find(
          (item) => item.id === action.payload.id,
        )
  
        if (itemToDecrease && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1
        }
      },
    },
  })
//2. You can then export these action creators and the reducer function to use in your Redux store setup and throughout your application.

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer


