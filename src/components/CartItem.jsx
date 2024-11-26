import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormater } from "../util/formatting";

const CartItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const handlePlusItem = () => {
    cartCtx.addItem(item);
  };

  const handleMinusItem = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormater.format(item.price)}
      </p>
      <p className="cart-item-action">
        <button onClick={() => handleMinusItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handlePlusItem}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
