//It is basically a wrapper around all the cartItems
import React from "react";
import CartItem from "./CartItem";
const Cart = (props)=>{   
        const {products,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
        // console.log("myproducts",products);s
        return(
            <div className="cart">
             {products.map((product)=>{
                // We can pass pretty much anything in the props -- including functions, jsx, and another compoenent as well
                // {console.log("current product",product);}
                return <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity = {onIncreaseQuantity}
                onDecreaseQuantity = {onDecreaseQuantity}
                onDeleteProduct = {onDeleteProduct}
                />
             })}
            </div>
        )
}

export default Cart;