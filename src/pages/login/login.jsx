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
       <h1 className='m-3 header'> Welcome to Femstore</h1>
       <h4> A demonstration project</h4>
       <div>
        <h2> Here are some instructions for you</h2>
        <Container>
        <ListGroup>
      <ListGroup.Item>Provide your username and gender you prefer to use in the below form</ListGroup.Item>
      <ListGroup.Item>Please Ensure that you provide same information(username, gender) in both stages of the demonstration</ListGroup.Item>
      <ListGroup.Item>Submit your information to start shopping</ListGroup.Item>
      <ListGroup.Item>On shopping page, select items you are interested in. Please select <strong>5 ITEMS</strong>  </ListGroup.Item>
      <ListGroup.Item>Proceed to checkout with selected items. This can be done by either clicking the shop icon on the top of the page or the  <strong>go to checkout button</strong> on the buttom of the page</ListGroup.Item>

      <ListGroup.Item>Click on Checkout to end your shopping and proceed to the final stage</ListGroup.Item>
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