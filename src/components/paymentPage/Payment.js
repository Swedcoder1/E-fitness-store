import React, { useState } from "react";
import "../paymentPage/payment.css";

const Payment = (props) => {
  const { setCart } = props;
  const [purchase, setPurchase] = useState(false);

  const doPurchase = (event) => {
    event.preventDefault();
    setPurchase(true);
    setCart([]);
  };

  return (
    <>
      {purchase ? (
        <div className="confirmed-container">
          <h3 className="confirmed-title">Thank you for your purchase!</h3>
          <p className="confirmed-text">
            Your products will be sent within 1-2 days
          </p>
        </div>
      ) : (
        <div className="form-container">
          <form className="payment-form">
            <label htmlFor="card-number">Card number </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              defaultValue="1234 5678 9123 4567"
            />

            <label htmlFor="card-holder">Card holder</label>
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              defaultValue="Jack Andersson"
            />

            <div className="test2">
              <div className="test3">
                <label htmlFor="expire">Expire date (mm/yy)</label>
                <input
                  type="text"
                  name="expire"
                  id="expire"
                  className="expire"
                  defaultValue="10 / 22"
                />
              </div>

              <div className="test4">
                <label htmlFor="cvc">cvv</label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  className="cvv"
                  defaultValue="123"
                />
              </div>
            </div>

            <button className="purchase-btn" onClick={doPurchase}>
              Purchase
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Payment;
