import React from 'react';
import "./CheckoutProduct.css";
import { useStataValue } from '../Providers/StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{basket}, dispatch] = useStataValue();

    
    const removeFromCart = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (

        <div className='checkout-product'>
            <div className='product-info'>
                <h2>{title}</h2>
                <p>₹{price}</p>
                 <div className='rating'>
                 {
                        Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                        ))
                    } </div>
                <img src={image} />

            </div>
            <button className='cart-btn' onClick={removeFromCart}>Remove From Cart</button>
            
        </div>
    );
}

export default CheckoutProduct;
