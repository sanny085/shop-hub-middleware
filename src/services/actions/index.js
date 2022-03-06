import {ADD_TO_CART, 
    REMOVE_TO_CART, 
    INCREASE_QUANTITY, 
    DECREASE_QUANTITY, 
    CLEAR_ITEMS_FROM_CART,
    LOGIN,
    LOGOUT 
} from '../constant'

export const addToCart = (data)=>{
    return {
        type : ADD_TO_CART,
        payload : data
    }
}

export const removeToCart = (data)=>{
    return {
        type : REMOVE_TO_CART,
        payload : data
    }
}
export const decreaseItem = (data)=>{
    return {
        type : DECREASE_QUANTITY,
        payload : data
    }
}
export const incrementItem = (data)=>{
    return {
        type : INCREASE_QUANTITY,
        payload : data
    }
}
export const clearItemsFromCart = ()=>{
    return {
        type : CLEAR_ITEMS_FROM_CART
    }
}

export const login = (data) => {
    return {
        type : LOGIN,
        payload : data
    }
}
export const logout = () => {
    return {
        type : LOGOUT
    }
}