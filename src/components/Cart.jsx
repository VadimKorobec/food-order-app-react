import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormater } from "../util/formatting";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
          <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
          <p className="modal-actions">
          <button></button></p>          

    </Modal>
  );
};

export default Cart;
