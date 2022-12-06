import React from "react";

class CartItem extends React.Component{
    // state of a component stores the local/temporary data for a particular component
    // componentDidMount(){
    //     this.testing();
    // }
    // testing(){
    //         // Call to setState is asynchornous only when setState is calleed inside event Handlers
    //     // In case setState is called outside of event handlers, such as in an ajax call or in a promise, it bheaves as a synchronous call
    //     // and not batching is done then
    //     var myPromise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve("Ho gaya resovle");
    //         },6000)
    //     });
     
    //     myPromise.then((message)=>{
    //         console.log("message ",message);
    //         this.setState({qty: this.state.qty+200});
    //         this.setState({qty: this.state.qty+200});
    //         this.setState({qty: this.state.qty+300},()=>{
    //         console.log("this.state ", this.state);
    //         });
    //     })
    // }
    // decreaseQuantity = () => {
    //     if(this.state.qty>0)
    //       this.setState(()=>{
    //         return {
    //             qty: this.state.qty-1
    //         }
    //       })
    // }
    // increaseQuantity = () => {
    //     // by using the arrow function it will use the binding of the parent which is the CarItem 
    //     // this.state.qty+=1; 
    //     //above statement obviously doesn't work because react does not know that we have made changes to the state
    //     // in order for react to know that we have made changes, we'll have to use setstate
    //     console.log("test increaseQuantity");
    //     console.log("this.state.qty ",this.state.qty);
         
    //     //setState form 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    //     this.setState({
    //        qty: this.state.qty + 2
    //     },()=>{
    //         console.log("qty ",this.state.qty);
    //     });
    //      //call to setState (in both forms) is asynchornous meaning that it runs in the background while the execution of 
    //      //further code continues, if you want to perform some task only after the call to setState is finished...
    //      // you 
    //     // console.log(this.state.qty); 
    //     //setState form 2
    //     // this.setState((prevState)=>{
    //     //     return {
    //     //         qty: prevState.qty + 1
    //     //     }
    //     // });

    //     // Both of the above forms of setState perform shallow merging with this.state
    // }
    render(){
        const {title,price,qty} = this.props.product;
        console.log("this.props",this.props);
        return (
            <div className="cart-item"> 
                <div style={styles.image} className="left-block">
                    <img alt="Cart Item"/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}> {title} </div>
                    <div style={{color:'#777'}}> {price} </div>
                    <div> Qty:{qty}  </div>
                      <div className="cart-item-actions">
                            {/* Here we will have buttons with className = "action-icons" */}
                            <img alt="increase"
                             className="action-icons"
                            onClick = {()=>{this.props.onIncreaseQuantity(this.props.product)}}
                             src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>

                            <img alt="decrease" 
                            className="action-icons"
                            onClick = {()=>{this.props.onDecreaseQuantity(this.props.product)}}
                             src="https://cdn-icons-png.flaticon.com/128/992/992683.png"/>

                            <img alt="delete" 
                            className="action-icons"
                             src="https://cdn-icons-png.flaticon.com/128/2907/2907762.png"/>
                      </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image:{
        height: 150,
        width: 200,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderRadius: 5
    }
}
export default CartItem;