import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

// import Timer from '../../components/timer'
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export const Shop = () => {

  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
 

  const navigate = useNavigate();
  return (
    <><div className="shop">
      <div className="shopTitle">
        <h1>FemTech Shop</h1>
       
      </div>
      {/* <Timer /> */}
      <div className="products container-fluid">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div justifyContent='center'>
         <button  class="btn-bg btn-primary m-3 "  onClick={() => {
           
           navigate("/cart");
         }}> GO TO CHECKOUT</button>
    </div>
      </div>
   
    {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Cookie Consent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        By clicking “ I Accept ”, you agree Fem Store can store cookies on your device and disclose information in accordance with our Cookie Policy.
        <br/><strong>Please note this is just for demonstration , no information is collected</strong>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Accept necessary
          </Button>
          <Button variant="primary" onClick={handleClose}>Accept All</Button>
        </Modal.Footer>
      </Modal>
     */}
    </>
    
  );
};
