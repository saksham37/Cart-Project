import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
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
getCartCount = ()=>{
   const {products} = this.state;
   let count = 0;

   products.forEach((product)=>{
    count+=product.qty;
   })
   return count;
}
  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
        count={this.getCartCount}
        />
        <Cart
         products={products} 
         onIncreaseQuantity = {this.increaseQuantity}
         onDecreaseQuantity = {this.decreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}
        />
      </div>
    );
  }

}

export default App;
