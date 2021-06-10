import React from "react";
import { productData } from "../../productData";
import "../productPage/productPage.css";

// Bild
// Produkter
// Footer

const ProductPage = (props) => {
  const { addItem } = props;
  return (
    <>
      <div className="product-container">
        {productData.map((product) => {
          const { id, price, img, title } = product;
          return (
            <div className="product" key={id}>
              <h3 className="title">{title}</h3>
              <img
                src={img}
                alt={title}
                height="225"
                width="400"
                className="img"
              />
              <p className="price">{price} sek</p>
              <div className="action-section">
                <button className="btn" onClick={() => addItem(product)}>
                  Add to cart
                </button>

                <p>Read more...</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
