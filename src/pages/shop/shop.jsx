import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import CookieConsent from "react-cookie-consent";
export const Shop = () => {
  return (
    <><div className="shop">
      <div className="shopTitle">
        <h1>FemTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    <CookieConsent
      location='top'
      buttonText="I Accept"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B", height:'400px', justifyContent:'center',color: "white", alignContent:'center'}}
      buttonStyle={{ color: "white", fontSize: "13px" }}
      expires={150}
    
  onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by user scrolling");
    } else {
      alert("Accept was triggered by clicking the Accept button");
    }
  }}
>    Please accept the following cookies to better tailor your experience</CookieConsent>
    </>
    
  );
};
