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
    increaseQuantity = (product) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    //    console.log("Increase the quantity of ",product);
       const {products} = this.state;
       const index = products.indexOf(product);
       products[index].qty+=1;
       this.setState({
        products //short hand for products:products
       });
    }
    decreaseQuantity = (product) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        //    console.log("Increase the quantity of ",product);
           const {products} = this.state;
           const index = products.indexOf(product);
           if(products[index].qty<=0)
           return;
           products[index].qty-=1;
           this.setState({
            products //short hand for products:products
           });
    }
    handleDeleteProduct = (id)=>{
        // let {products} = this.state;
        // const index = products.indexOf(product);
        // console.log("product found at index ",index);
        // console.log("DeleteCartItem called");
        // products = products.filter((curr)=>{
        //       return curr!==product;
        // });
        // this.setState({
        //     products
        // })
        const {products} = this.state;
        const items = products.filter((item)=>{
           return item.id!==id;
        });
        this.setState({
            products: items
        })
    }    
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
             {products.map((product)=>{
                // We can pass pretty much anything in the props -- including functions, jsx, and another compoenent as well
                return <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity = {this.increaseQuantity}
                onDecreaseQuantity = {this.decreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                />
             })}
            </div>
        )
    }
}

export default Cart;