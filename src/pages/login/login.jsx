import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  
 
  return (
    <>
    <h1> Welcome to Femi Project</h1>
    <h2> Select your gender</h2>
    <button onClick={() => navigate("/shop") (console.log("timer starts"))}> StART Shopping </button>
    {/* <input type='radio'> Female</input>
    <input> Male</input> */}
    {/* <select id='gender'>
        <option value='female'>
            Female
        </option>
        <option value='female'>
            Female
        </option>
        < option value='male'> Male</option>



    </select>
    <h2> Please Click the button to start your experience</h2>
    <button> Start shopping</button> */}
</>
  )
}

export default Login