import React from "react";
import "../cartPage/cart.css";
import { Link } from "react-router-dom";
import RowItem from "../cartPage/RowItem";

const Cart = (props) => {
  const { cart, setCart, addItem } = props;

  const decreaseAmount = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist.amount === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, amount: productExist.amount - 1 }
            : item
        )
      );
    }
  };

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.amount * currentValue.price,
    0
  );

  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="empty-cart-container">
            <h3 className="empty-cart-title">Your cart is empty</h3>
            <Link to="/" className="cart-link">
              Find products here
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="cart-container">
            <h4 className="cart-header">Your cart items</h4>
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="test test1" scope="col" colSpan="1">
                    Product
                  </th>
                  <th className="test" scope="col">
                    Quantity
                  </th>
                  <th className="test" scope="col">
                    Unit price
                  </th>
                  <th className="test" scope="col">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <RowItem
                      key={product.id}
                      decreaseAmount={decreaseAmount}
                      removeItem={removeItem}
                      addItem={addItem}
                      product={product}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="clear-cart-div">
              <p className="clear-cart" onClick={() => setCart([])}>
                Clear cart
              </p>
            </div>
            <div className="link-container">
              <div className="cart-totals">
                <div className="row">
                  <p>Subtotal</p>
                  <p>{totalPrice} sek</p>
                </div>
                <div className="row">
                  <p>Total</p>
                  <p>{totalPrice} sek</p>
                </div>

                <Link className="checkout-link" to="/payment">
                  Procced to checkout
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
