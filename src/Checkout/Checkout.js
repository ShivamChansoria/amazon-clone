import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import { useStataValue } from "../Providers/StateProvider";
import Subtotal from "./Subtotal";
import { getBasketTotal } from "../Providers/reducer";
import axios  from "axios";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStataValue();
  const cartTotal = getBasketTotal(basket);

  // console.log(basket);


  const handleCheckout = async (cartTotal, user) => {

   const {data:{key}} = await axios.post("http://localhost:4000/api/getkey");

   const {data:{order}} = await axios.post("http://localhost:4000/api/checkout", {
      cartTotal
    })
    console.log(order);
    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Shivam Chansoria",
      description: "Razorpay Testing Transactions",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
          name: "Test Name",
          email: user.email,
          contact: "9000090000"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#0F1111"
      }
  };

  const createOrder= await fetch("https://clone-22501-default-rtdb.firebaseio.com/checkout-payment.json", {
    method: "POST",
    body:JSON.stringify({
      order_id:order.id,
      amount: order.amount/100,
      user:user.email,
      auth:"payment_is_not_verified_yet",
    })
  })
  const razor = new window.Razorpay(options);
      razor.open();
  };


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
        </div>

        <div className="checkout-subtotal">
          <Subtotal />
          <button className="checkout-btn" onClick={() => handleCheckout(cartTotal,user)}>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
