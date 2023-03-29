import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const Contact = () => {

  return  <Container fluid>
  <Row  className='m-3 p-3'>
   <h2>Have you completed the second stage of the shopping task? i.e shoppped on Femtech store? </h2> 
    <h3> If Yes, You have successfully completed the demonstration.  Thank you</h3>
   
   <h3> If NO,  please Click the button to move to the second stage</h3>

  
   <Button vaiant="Success" size="md" href='https://femtechp.netlify.app/' className='m-3 p-3'>  Stage 2 </Button>
  </Row>
</Container>
};
