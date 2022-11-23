import React from "react";

class CartItem extends React.Component{
    // state of a component stores the local/temporary data for a particular component
    constructor(){
        super();
        this.state = {
            title: "Mobile bas",
            price: "99",
            qty: 1
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // by using the arrow function it will use the binding of the parent which is the CarItem 
        // this.state.qty+=1; 
        //above statement obviously doesn't work because react does not know that we have made changes to the state
        // in order for react to know that we have made changes, we'll have to use setstate
        console.log("test increaseQuantity");
        console.log("this.state.qty ",this.state.qty);
         
        //setState form 1
        // this.setState({
        //    qty: this.state.qty + 1
        // })

        //setState form 2
        this.setState(()=>{
            return {
                qty: this.state.qty + 1
            }
        })

        // Both of the above forms of setState perform shallow merging with this.state
    }
    render(){
        const {title,price,qty} = this.state;
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
                             onClick = {this.increaseQuantity}
                             src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>

                            <img alt="decrease" 
                            className="action-icons"
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