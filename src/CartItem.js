import React from "react";

const CartItem = (props)=>{
        const {title,price,qty} = props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
        // console.log("this.props",this.props);
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
                            onClick = {()=>{onIncreaseQuantity(product)}}
                             src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>

                            <img alt="decrease" 
                            className="action-icons"
                            onClick = {()=>{onDecreaseQuantity(product)}}
                             src="https://cdn-icons-png.flaticon.com/128/992/992683.png"/>

                            <img alt="delete" 
                            className="action-icons"
                            onClick={()=>{onDeleteProduct(product.id)}}
                             src="https://cdn-icons-png.flaticon.com/128/2907/2907762.png"/>
                      </div>
                </div>
            </div>
        );
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