//It is basically a wrapper around all the cartItems
import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
              <CartItem/>
              <CartItem/>
              <CartItem/>
            </div>
        )
    }
}

export default Cart;