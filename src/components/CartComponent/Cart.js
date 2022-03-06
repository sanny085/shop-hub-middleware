import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import {removeToCart, decreaseItem, incrementItem, clearItemsFromCart} from "../../services/actions/index"
import {useHistory} from 'react-router-dom'

function Cart(props) {


const { cartItems }=useSelector(state=>state?.products)
const dispatch = useDispatch(); 
const history = useHistory();

// console.log('Cart', cartItems);
// useEffect(()=>{
//   history.push('/cart')
// },[cartItems]); 


//console.log({cartItems:cartItems})
  
  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
    {
      cartItems.length === 0 ? (
        <div className="cart-checkout">
          <br/>
           <div className="cart-shipping"><h4>Cart is Empty</h4></div>
          <br/>
        </div>
        ) : (
          <>
          <div className="cart-list">
        <ul>
         {cartItems?.map((item,index)=> <li className="cart-item">
            <div className="cart-item-img">
            <img
              src={item.image}
              width="90"
              height="38"
              alt="cart item"
            />
            </div>
            <div className="cart-item-name">
              <span>{item.name} </span>
            </div>
            <div className="cart-item-qty">
              {item?.quantity>1? 
              <span onClick={()=>dispatch(decreaseItem(item))} ><FontAwesomeIcon icon={['fas','minus']}/></span>
              :
              <span onClick={()=>dispatch(removeToCart(item))}  className="cart-delete-item">
               <FontAwesomeIcon icon={['far','trash-alt']}/>
              </span>
              }
              <input type='number' value={item?.quantity && item?.quantity}  disabled/>
              <span onClick={()=>dispatch(incrementItem(item))}><FontAwesomeIcon icon={['fas','plus']}/></span>
            </div>
            <div className="cart-item-price">{item.price.substring(1) * item.quantity}</div>
          </li>
         )}
        </ul>
      </div>

      <div className="cart-checkout-button">
            <button onClick={()=>dispatch(clearItemsFromCart())}>Clear Card</button>
        </div>

      <div className="cart-checkout">
        <div className="cart-total"><h4>Total :</h4><span>$1008</span></div>
        <div className="cart-shipping"><h4>Shipping :</h4><span>Free Shipping</span></div>
        <div className="cart-checkout-button">
          <button>Proceed to Checkout</button>
        </div>
      </div>

          </>

        )
    }


      
    </div>
  );
}

export default Cart;
