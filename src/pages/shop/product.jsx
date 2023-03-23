import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage,remaining, additional } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt='product'/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <p>Number of  Items Remaining:{remaining}</p>
        <form action="/action_page.php">
         <input type="checkbox" name="vehicle3" value="Boat" checked />
        <label for="vehicle3" > {additional}</label><br /><br/>
  {/* <input type="submit" value="Submit"/>  */}
        </form>
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
