import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.cart);
  // console.log(products);

  const removeHandle = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>Price: ${product.price}</h5>
            <div>
              <label>Quantity: </label>
              <input type="number" value={product.quantity} min="1" />
            </div>
            <button
              className="btn btn-warning"
              onClick={() => removeHandle(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart