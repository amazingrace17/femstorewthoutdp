import { createContext,   useState ,
  //  useReducer
  } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}; 


// const intialState={
//   cart:{
//     cartItems:[]
//   }, 
//   userInfo: localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null
// };  

// function reducer(state,action){
//   switch(action.type){
//     case 'CART_ADD_ITEM':
//       return {
// ...state,
// cart:{
//   ...state.cart,
//   cartItems:[...state.cart.cartItems, action.payload],
// }
//       }
//       case 'USER_REG':
//     return {...state, userInfo:action.payload  }
//    default: 
//       return state  
// }
// }

export const ShopContextProvider = (props) => {
 
  const [cartItems, setCartItems] = useState(getDefaultCart());


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const getTotalCartItems= () => {
    let totalCart = 0;
   
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
  
        totalCart += cartItems[item];
      }
    }
    return totalCart;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };


  const contextValue = {
    cartItems,
    addToCart,
   
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
