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
                img: 'https://content.jdmagicbox.com/comp/def_content/mobile_phone_dealers/default-mobile-phone-dealers-8.jpg',
                id: 1
            },
            {
                title: "Watch",
                price: 99,
                qty: 19,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorP-lCNsfu01IlZNwqxJGyasgeTxO6BADtQ&usqp=CAU',
                id: 2
            },
            {
                title: "Laptop",
                price: 99,
                qty: 2,
                img: 'https://www.cnet.com/a/img/resize/33d64d1623f1dc132165ef8393fbe5e7be9b763a/hub/2021/10/28/e92175f9-bcbf-4361-9c4a-3bfaf656ac27/hp-pavilion-aero-13-09.jpg?auto=webp&fit=crop&height=528&width=940',
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
getCartTotal = ()=>{
  let total = 0;
  const {products} = this.state;
  products.forEach((product)=>{
     total += (product.price*product.qty);
  })
  return total;
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
        <div style={{fontSize:30,padding:10}}> TOTAL : {this.getCartTotal()} </div> 
      </div>
    );
  }

}

export default App;
