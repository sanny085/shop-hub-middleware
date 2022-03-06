import React from 'react'

import data from "../../data";
import {ADD_TO_CART, REMOVE_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_ITEMS_FROM_CART} from '../constant'
 
const initialProduct = {
    data: data.products,
    cartItems : [], 
}

const productReducer = (state = initialProduct, action) => {
    console.log('action1',action);
    switch (action.type) {
        
        case ADD_TO_CART:
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            console.log('action2',itemIndex, state.cartItems);
            if(itemIndex >=0) { 
              state.cartItems.map((item,i)=>{
                  if(i===itemIndex) 
                  item.quantity = item.quantity + 1;
              })
              
            } else{
            const tempProduct = {...action.payload, quantity : 1}
            // console.log('action cart 2', tempProduct) 
            state.cartItems.push(tempProduct)
            console.log('ADDTOCart Function', state?.cartItems && state?.cartItems)
            } 
        return state;   
            
        case REMOVE_TO_CART:
            const removedItem = state.cartItems.filter((item) =>
            item._id !== action.payload._id
        )
        state.cartItems = removedItem;
        return state;
         
        case DECREASE_QUANTITY: 
            const itemI = state.cartItems.findIndex((item) => item._id === action.payload._id)
            state.cartItems[itemI].quantity = state.cartItems[itemI].quantity - 1
          
        return state;   
        
        case INCREASE_QUANTITY:
            console.log('action decre', action);
            const itemIt = state.cartItems.findIndex((item) => item._id === action.payload._id)
             state.cartItems[itemIt].quantity = state.cartItems[itemIt].quantity + 1
           
        return state; 

        case CLEAR_ITEMS_FROM_CART:
         state.cartItems = []    
         return state;
     
        default:
            return state;
    }
}

export default productReducer
