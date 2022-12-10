import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
// import firebase from "firebase";
import app from './myfirebase';
import { getFirestore, collection, getDocs, snapshotEqual } from 'firebase/firestore';
// import { getDatabase, ref, onValue} from "firebase/database";
// import { FirebaseError } from 'firebase/app';
import * as firebase from 'firebase/firestore';
import { doc, onSnapshot } from "firebase/firestore";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading:true
    }
}

    componentDidMount(){
      const db = getFirestore(app);
    
      // const docref = doc(db,"Products","24qFgxlcltDFtZMhvudm");
      // var promise = new Promise();
      // async function getProducts(){
      //   const products = [];
      //   const curr = await onSnapshot(collection(db,'Products'),(snapshot)=>{
      //     // const products = [];
      //      snapshot.docChanges().forEach((change)=>{
      //       // console.log(change.doc.data());
      //       // const currdata = await change.doc.data();
      //        products.push(change.doc.data());
      //      })
      //      promise.resolve();
      //     //  return products;
      //   })
      //   return products;
      // }
      let products = [];
        onSnapshot(collection(db,'Products'),(snapshot)=>{
          // const products = [];
           snapshot.docChanges().forEach((change)=>{
            // console.log(change.doc.data());
            // const currdata = await change.doc.data();
             const data = change.doc.data();
             data['id'] = change.doc.id;
             let found = false;
             for(let i in products){
               if(products[i].id==data.id){
                 products[i] = data;
                 found = true;
               }
             }
             if(!found)
             products.push(data);
           })
           this.setState({
            products,
            loading:false
           })
        })

      
     
      // const products = getProducts();
      // products.then((result)=>{
      //   console.log("result",result);
      //   this.setState({
      //     products:result,
      //     loading:false
      //   })
      // })
      // console.log("products",products);
      // this.setState({
      //   products,
      //   loading:false
      // })
      // const docs = getDocs(docref);
      // console.log(docref);
      //   db.collection('Products').onSnapshot((snapshot)=>{
      //     console.log(snapshot);
      //   })
      //  collection(db,'Products').onSnapshot((snapshot)=>{
      //   console.log("snapshot",snapshot);
      //  })
      // console.log("docref",docref);
      // const productCol = collection(db,"Products");
      
      // const unsub = onSnapshot(doc(db, "Products","24qFgxlcltDFtZMhvudm"), (doc) => {
      //   console.log("Current data: ", doc.data());
      //   });
          // const starCountRef = ref(db, 'Products/' + "24qFgxlcltDFtZMhvudm");
          // onValue(starCountRef, (snapshot) => {
          //   const data = snapshot.val();
          //   // updateStarCount(postElement, data);
          //   console.log(data);
          // });

      // async function getProducts(db) {
      //   const productsCol = collection(db, 'Products');
      //   const productSnapshot = await getDocs(productsCol);
      //      const productList = [];
      //   productSnapshot.docs.map((mydoc) =>{
      //       // const data = doc.data()
      //       // data['id'] = doc.id;
      //       // return data;
      //       // this will give you doc.id for every doc
      //       // console.log("mydoc.id",mydoc.id);
      //      onSnapshot(doc(db,"Products",mydoc.id),(newdoc)=>{
      //           // console.log("current data",newdoc.data());
      //           const data = newdoc.data();
      //           data['id'] = newdoc.id;
      //           // console.log("data",data);
      //           // return data;
      //           productList.push(data);
      //       })
      //       // console.log("current",current);
      //   }
      //      );
      //   return productList;
      // }
      // const productList = getProducts(db);
      // // console.log("productList",productList);
      // productList.then((result)=>{
      //   console.log("result",result);
      //   this.setState({
      //         products:result,
      //         loading: false
      //       })
      // })
      // const db = getFirestore(app);
      // let ans = getProducts(db);
      // // console.log("ans[1]",ans[1]);
      // console.log(ans);
      // ans.then((result)=>{
      //   console.log(result);
      //   this.setState({
      //     products:result,
      //     loading: false
      //   })
      // })
      
      // Get a list of cities from your database
    
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
    const { products,loading } = this.state;
    console.log("render called",products);
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
        {loading && <h1>Loading Products....</h1>}
        <div style={{fontSize:30,padding:10}}> TOTAL : {this.getCartTotal()} </div> 
      </div>
    );
  }

}

export default App;
