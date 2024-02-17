import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import { useStataValue } from "../Providers/StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStataValue();
  console.log(basket);

  return (
    <div className="cart-page">
      <div className="checkout">
        <div className="checkout-product-list">
          <h1>Your Shopping Basket</h1>

          {basket.map((item) => (
            <CheckoutProduct
              image={item.image}
              title={item.title}
              id={item.id}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* <CheckoutProduct
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="product-image"
          price={480}
          title="This is the Title"
          id="0012"
          rating={4}
        />
        <CheckoutProduct
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="product-image"
          price={480}
          title="This is the Title"
          id="0013"
          rating={5}
        />
        <CheckoutProduct
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="product-image"
          price={480}
          title="This is the Title"
          id="0014"
          rating={3}
        /> */}
        </div>

        <div className="checkout-subtotal">
          <Subtotal />
          <button className="checkout-btn">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
