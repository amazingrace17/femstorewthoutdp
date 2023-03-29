import React, { useState} from 'react'
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useNavigate,} from "react-router-dom";
import  "./login.css"
function Login({handleStart}) {
    const navigate = useNavigate(); 
    const [isLoading, setLoading] = useState(false);
    const[username, setUsername]= useState('');
    const[gender,setGender]= useState('');

    const handleGenderChange = (e) => {
      setGender(e.target.value);
    };
   
    const submitHandler = async(e) =>{
      setLoading(true);
      e.preventDefault();
      try{
          const {data} = await axios.post('https://storebackend-h0h1.onrender.com/users/register',{
            username,
            gender
          })
          setLoading(false);
           navigate('/shop')
            console.log(data); 
          
          localStorage.setItem('userInfo', JSON.stringify(data))
          
          console.log(data); 
        
          
      }catch(err){
alert("Registration failed")
      }
    }
  
  
  return (  
    <>
    <div class='small-container'>
    
       <div >
        <div> <h1 className='m-3 header'> Welcome to Tifestore</h1>
       <h6> <i>A web app to complete a shopping task </i> </h6></div>
      
       <div>
        <h2> Here are some instructions to complete the shopping task</h2>
        <Container>
        <ListGroup>
      <ListGroup.Item> Please Provide the same username and gender in both tasks</ListGroup.Item>
      <ListGroup.Item>Enter a username, select your gender and click on <strong> Submit to start Shopping</strong></ListGroup.Item>
      {/* <ListGroup.Item>Submit your information to start shopping</ListGroup.Item> */}
      <ListGroup.Item>On the shopping page, Click <strong> add to Cart</strong> for <strong>five random items</strong>of your choice  </ListGroup.Item>
      <ListGroup.Item>To see all five items selected , Click on <strong>Go to cart </strong>at the buttom of the page or <strong>cart icon </strong>the at the top of the page.</ListGroup.Item>
      <ListGroup.Item>Verify the number of items selected</ListGroup.Item>
      <ListGroup.Item>Proceed to click on <strong>Checkout</strong> to complete the task.</ListGroup.Item>
    </ListGroup>
        </Container>
       </div>
       
    </div>
    <div class="container-sm">
      <form onSubmit={submitHandler}>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserName</label>
    <input type="text" class="form-control" id="username" aria-describedby="username"
    onChange={(e)=>setUsername(e.target.value)}/>
  </div>
  <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Gender
            </label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </div>
  <button type="submit" class="btn btn-primary m-3 " 
    onClick={handleStart}
     disabled={isLoading}
>   {isLoading ? 'Loading…' : 'Submit to start shopping'}</button>
</form>
    </div>
    </div>
   


    
</>
  )
}

export default Login