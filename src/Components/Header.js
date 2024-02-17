import React, { useState } from "react";
import { ShoppingBasket } from "@material-ui/icons";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { StateContext, useStataValue } from "../Providers/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getBasketTotal } from "../Providers/reducer";

const Header = () => {
  let counter = 0;
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStataValue();

  const handleLogin = () => {
    if (user) auth.signOut();
  };

  const handleLogout = () => {
    if (user)
      dispatch({
        type: "REMOVE_USER",
        user: user,
      });
    alert("User is now Logged out!!!");
  };

  const handleCart = () => {
    const basketTotal = getBasketTotal(basket);
    console.log(basketTotal);
    history.push("/cart");
  };

  return (
    <header className="navbar">
      <Link to="/">
        <div className="amazon-logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo-png"
          />
        </div>
      </Link>
      <div className="search-bar">
        <input type="text" className="input-bar" />
        <button className="search-icon">
          <SearchIcon />
        </button>
      </div>
      <div className="nav-items">
        {user ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="sign-out" onClick={handleLogout}>
              <p>
                Hello, {user.email} <br />
                <h3>Sign Out</h3>
              </p>
            </div>
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="sign-in" onClick={handleLogin}>
              <p>
                Hello Guest <br />
                <h3>Sign in</h3>
              </p>
            </div>
          </Link>
        )}
        <span className="orders">
          <p>
            Returns <br />
            <h3>Orders</h3>
          </p>
        </span>
        <span className="prime">
          <p>
            Your <br />
            <h3>Prime</h3>
          </p>
        </span>
        </div>
        {/* <button className="dropdown-btn">
          <ArrowDropDownCircleIcon />
        </button> */}
        <button className="cart" onClick={handleCart}>
          <ShoppingBasket />
          <p> {basket?.length} </p>
        </button>
      
    </header>
  );
};

export default Header;
