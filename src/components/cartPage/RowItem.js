import React from "react";
import { IoMdTrash } from "react-icons/io";

const RowItem = (props) => {
  const { product, decreaseAmount, removeItem, addItem } = props;

  return (
    <>
      <tr key={product.id}>
        <td className="text-img-container">
          <img src={product.img} alt={product.title} className="cart-img" />
          <span className="product-title">{product.title}</span>
        </td>
        <td>
          <button
            className="decrease-btn"
            onClick={() => decreaseAmount(product)}
          >
            -
          </button>
          <span className="amount-number">{product.amount}</span>
          <button className="increase-btn" onClick={() => addItem(product)}>
            +
          </button>
        </td>
        <td>{product.price} sek</td>
        <td>
          <IoMdTrash className="trash-btn" onClick={() => removeItem(product)}>
            Remove
          </IoMdTrash>
        </td>
      </tr>
    </>
  );
};

export default RowItem;
