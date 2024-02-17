import React from 'react';
import "./Product.css";
import { useStataValue } from '../Providers/StateProvider';

const Product = ({id, title, image, price, rating}) => {

        const [{basket}, dispatch] = useStataValue();

        const addToBasket = () => {
            dispatch( {
                type: "ADD_TO_BASKET",
                item:{
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating
                }
            })
        }

    return (
                <div className='product-card'>
                    <div className='product-info'>
                        <p>
                        {title}
                    <br />
                   <span className='product-price '> ₹{price} </span>
                    </p>
                     <div className='product-rating'>
                        {
                        Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                        ))
                    }
                     </div>
                    </div>
                    <div className='product-image'>
                      <img src={image} alt='product-img' />
                    </div>
                    <button className='cart-button' onClick={addToBasket}>Add to Cart</button>
                </div>
            
    );
}

export default Product;
