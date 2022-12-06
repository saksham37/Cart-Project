//It is basically a wrapper around all the cartItems
import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: "Mobile",
                    price: 999,
                    qty: 1,
                    id: 1
                },
                {
                    title: "Watch",
                    price: 99,
                    qty: 19,
                    id: 2
                },
                {
                    title: "Laptop",
                    price: 99,
                    qty: 2,
                    id: 3
                }  
            ]
        }
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
             {products.map((product)=>{
                // We can pass pretty much anything in the props -- including functions, jsx, and another compoenent as well
                return <CartItem product={product} key={product.id}/>
             })}
            </div>
        )
    }
}

export default Cart;