import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItem = state.items.find(
        (item) => item.id === action.item.id
      );

      let newItems = [];

      if (existingCartItem) {
        newItems = state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, items: newItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.item, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM": {
      const existingCartItem = state.items.find(
        (item) => item.id === action.id
      );

      let newItems = [];

      if (existingCartItem.quantity === 1) {
        newItems = state.items.filter((item) => item.id !== action.id);
        return { ...state, items: newItems };
      } else {
        newItems = state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return { ...state, items: newItems };
      }
    }

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
