import React, {useEffect, useState} from 'react'

  function Timer(props) { 
    const [ seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);


    let timer;
    useEffect(()=>{
  // eslint-disable-next-line react-hooks/exhaustive-deps
  timer = setInterval(()=>{
    setSeconds(seconds +1 );
    if(seconds===59){
        setMinutes(minutes +1);
        setSeconds(0);
    }
},1000)
   return()=> clearInterval(timer)
    }) 

const  stop=()=>{
    clearInterval(timer)
}
  return ( 
    <>
        {/* <h1> Timer</h1> */}
        
        <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds} </h1>
    <button onClick={stop}> stop </button>
    </>
  )
}

export default Timer

// export default Timer
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [startTime, setStartTime] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [checkoutTime, setCheckoutTime] = useState(null);

//   useEffect(() => {
//     startTimer();
//     return stopTimer;
//   }, []);

//   function startTimer() {
//     setStartTime(new Date().getTime());
//   }

//   function updateTimer() {
//     const currentTime = new Date().getTime();
//     const elapsedTime = (currentTime - startTime) / 1000;
//     setElapsedTime(elapsedTime.toFixed(0));
//   }

//   function stopTimer() {
//     setCheckoutTime(elapsedTime);
//     setElapsedTime(0);
//   }

//   return (
//     <div>
   
//       <p>Timer: {elapsedTime} seconds</p>
//       <a href="checkout.html" onClick={stopTimer}>Go to checkout page</a>
//       {checkoutTime && <p>Checkout time: {checkoutTime} seconds</p>}
//     </div>
//   );
// }

// export default Timer;
