import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
export const Contact = () => {

  return  <Container fluid>
  <Row  className='m-3 p-3'>
   
   You have successfully completed the first part of the demonstration.
   Click the button to move to the second stage
   <Button vaiant="Success" size="md" href='https://femtechp.netlify.app/' className='m-3 p-3'>  Stage 2 </Button>
  </Row>
</Container>
};
