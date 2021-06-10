import React, { useState } from "react";
import ProductPage from "../src/components/productPage/ProductPage";
import Navbar from "../src/components/navbar/Navbar";
import Cart from "../src/components/cartPage/Cart";
import Payment from "../src/components/paymentPage/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, amount: productExist.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const totalAmount = cart.reduce((sum, product) => sum + product.amount, 0);

  return (
    <>
      <Router>
        <Navbar totalAmount={totalAmount} />
        <Switch>
          <Route exact path="/">
            <ProductPage addItem={addItem} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              setCart={setCart}
              addItem={addItem}
              totalAmount={totalAmount}
            />
          </Route>
          <Route exact path="/payment">
            <Payment setCart={setCart} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

// var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default App;
