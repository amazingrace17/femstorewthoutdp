import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


export const Navbar = () => {

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [checkoutTime, setCheckoutTime] = useState(null);

  useEffect(() => {
    if (startTime && endTime) {
      const timeDiff = Math.abs(endTime - startTime);
      setCheckoutTime(timeDiff / 1000); // Convert to seconds
    }
  }, [startTime, endTime]);

  const handleStartCheckout = () => {
    setStartTime(new Date());
  };

  const handleCompleteCheckout = () => {
    setEndTime(new Date());
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      {/* <button onClick={handleStartCheckout(console.log("Timer started"))}>Start Shopping</button>
      <button onClick={(handleCompleteCheckout) (console.log("Timer stopped"))}>Complete Checkout</button> */}
      {checkoutTime && <p>Checkout Time: {checkoutTime} seconds</p>}
    </div>
  );
};
