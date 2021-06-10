import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  const { totalAmount } = props;

  return (
    <div className="navbar-container">
      <h1>
        <Link to="/" className="link-logo">
          E-Fitness
        </Link>
      </h1>
      <div className="links-container">
        <div className="item-display">
          <Link to="/cart">
            <FaShoppingCart className="shopping-cart" />
          </Link>
          <p className="amount">{totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
