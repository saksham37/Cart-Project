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
import { doc, onSnapshot , addDoc, setDoc, deleteDoc} from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";  

const db = getFirestore(app);
const myCache = [
  {
    title: "Mobile",
    price: 999,
    qty: 1,
    img: 'https://content.jdmagicbox.com/comp/def_content/mobile_phone_dealers/default-mobile-phone-dealers-8.jpg'
},
{
    title: "Watch",
    price: 99,
    qty: 19,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorP-lCNsfu01IlZNwqxJGyasgeTxO6BADtQ&usqp=CAU'
},
{
    title: "Laptop",
    price: 99,
    qty: 2,
    img: 'https://www.cnet.com/a/img/resize/33d64d1623f1dc132165ef8393fbe5e7be9b763a/hub/2021/10/28/e92175f9-bcbf-4361-9c4a-3bfaf656ac27/hp-pavilion-aero-13-09.jpg?auto=webp&fit=crop&height=528&width=940'
},
{
  qty: "2",
  title: "Razor",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1649274115-schick-hydro-silk-1649274110.jpg",
  price: 299
},
{
  qty: "3",
  title: "Washing Machine",
  img : "https://www.voltasbeko.com/media/catalog/product/v/w/vwm915647-final-copy.jpg",
  price: 2333
}
]
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
      // const q = query(collection(db, 'Products'), orderBy("price"));
      // const querysnapshot = getDocs(q);
      //    console.log("querysnapshot",querysnapshot);
      //    querysnapshot.then((snapshot)=>{
      //     snapshot.forEach((doc)=>{
      //       console.log("dagaa",doc.data());
      //     })
      //    })
      let products = [];
        onSnapshot(collection(db,'Products'),(snapshot)=>{
          // let products = [];
          console.log("onSnapshot called");
           snapshot.docChanges().forEach((change)=>{
            // console.log(change.doc.data());
            // const currdata = await change.doc.data();
            console.log("inside change");
            if(change.type==='removed'){
              // const index = products.findIndex(change.doc.data());
             const id = change.doc.id;
             products = products.filter((product)=>{
                 return product.id!=id;
             });
              // products.splice(index,1);
            }
            else{
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
            }

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
const productRef = doc(db, 'Products', products[index].id);
setDoc(productRef, { qty: products[index].qty+1 }, { merge: true });
  //  products[index].qty+=1;
  //  this.setState({
  //   products //short hand for products:products
  //  });
}
decreaseQuantity = (product) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    //    console.log("Increase the quantity of ",product);
       const {products} = this.state;
       const index = products.indexOf(product);
       const productRef = doc(db, 'Products', products[index].id);
setDoc(productRef, { qty: products[index].qty-1 }, { merge: true });
      //  if(products[index].qty<=0)
      //  return;
      //  products[index].qty-=1;
      //  this.setState({
      //   products //short hand for products:products
      //  });
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
    // const {products} = this.state;
    // const items = products.filter((item)=>{
    //    return item.id!==id;
    // });
    // this.setState({
    //     products: items
    // })
    deleteDoc(doc(db,"Products",id))
    .then(()=>{
      console.log("Document deleted successfully");
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
 addProduct = ()=>{
     // Add a new document with a generated id.
     myCache.map((current)=>{
      const docRef = addDoc(collection(db, "Products"),current);
     });
     
      // console.log("Document written with ID: ", docRef.id);
 }
  render(){
    const { products,loading } = this.state;
    console.log("render called",products);
    return (
      <div className="App">
        <Navbar
        count={this.getCartCount}
        />
        <button
        onClick={this.addProduct} style={{fontSize:20,marigin:5}}
        > Add a product </button>
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
