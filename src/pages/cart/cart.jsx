import React, { useContext , useState, useEffect} from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./cart.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import Timer from "../../components/timer";



export const Cart = ({ startTime }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [show, setShow] = useState(true);
  const [isChecked, setIsChecked] = useState(true);  

  const handleClose = () => setShow(false);
  
  function formatTime(time) {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
   const timeTaken= `${hours}:${minutes}:${seconds}`;
   return timeTaken
    // format the elapsed time as desired (e.g., HH:mm:ss.SSS)
  }
  useEffect(() => {
    if (startTime) {
      const intervalId = setInterval(() => {
        setElapsedTime(new Date().getTime() - startTime);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [startTime]);

  function handleStop() {
    localStorage.removeItem("startTime");
  }
  const { cartItems, getTotalCartAmount,getTotalCartItems} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
let totalCartAmount= getTotalCartItems();  

const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
  
};
if (isChecked) {
  totalCartAmount += 1;
}

  const user = JSON.parse(localStorage.getItem("userInfo") )

const timeTaken = formatTime(elapsedTime)

// const username = userId.data.id
 let user_Id= user.data.id
 
  const submitHandler = async(e) =>{
    // e.preventDefault();
    try{
        const {data} = await axios.post('https://storebackend-h0h1.onrender.com/cart/darkCarts',{
         items: totalCartAmount,
         userId: user_Id,
         timeTaken:timeTaken,
         bill:totalAmount,
        }) 
        console.log(data, 'SAVING TO DARK CARK')
    }catch(err){
alert("Registration failed")
    }
  }
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items </h1>
        <p>Elapsed Time: {timeTaken}</p>
      </div>
      <div className="cart"> 
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null
       } )}
       
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          {/* <p> Subtotal: ${totalCart} </p> */}
          <p> Total Items: {totalCartAmount} </p>
          
          {/* <p> Subtotal: ${cartItems} </p> */}
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
         
           
          <button onClick={() => navigate("/shop")}> Checkout</button>
          <br/>
         <input
              type="checkbox"
              name="gender"
              value="male"
             defaultChecked={isChecked}
              checked={isChecked}
              onChange={handleCheckboxChange}
            /> Add laptop cover
 
        </div>
          
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
  <Button variant="outline-light"
          onClick={() => {
            submitHandler();
           handleStop()
            console.log(`Elapsed Time: ${formatTime(elapsedTime)}` )
            console.log(timeTaken)
            navigate("/contact");
          }}
        >
          {" "}
          Checkout{" "}
        
          </Button>{' '}
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Get my free Discount!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Do you want to get discounts on your order from time to time. We always have discount offers for our users. Enter your email and get discounts
        <br/><strong>Please note this is just for demonstration , no information is collected</strong>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>Accept</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

