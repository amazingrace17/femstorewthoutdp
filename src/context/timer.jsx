import React, { useState, useEffect } from "react";

function CheckoutTimer() {
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
    <div>
      <button onClick={handleStartCheckout}>Start Shopping</button>
      <button onClick={handleCompleteCheckout}>Complete Checkout</button>
      {checkoutTime && <p>Checkout Time: {checkoutTime} seconds</p>}
    </div>
  );
}
