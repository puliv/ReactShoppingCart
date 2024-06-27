import { useState } from "react";
import deleteIcon from "../assets/img/delete-icon.png";
import { useGlobalState, useGlobalDispatch } from "../context/GlobalState";
import {
  removeFromCart,
  incrementCount,
  decrementCount,
} from "../context/actions";
import "../scss/Cart.scss";

function Cart() {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const { cart } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const deleteItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCount(id));
  };

  return (
    <>
      <div className="shopping-cart">
        <ul className="shopping-cart-list">
          {cart &&
            cart.map((product, idx) => (
              <li key={idx} className="cart-item">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-count">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  {product.count}
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <div className="cart-item-delete">
                  <img
                    src={deleteIcon}
                    alt="alt"
                    onClick={() => deleteItemFromCart(product.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
        <div className="shopping-cart-total">
          <h1>Total: ${totalPriceCart}</h1>
        </div>
      </div>
    </>
  );
}

export default Cart;
