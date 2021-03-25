import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { userInstance } from "../../axios";
import toast from "react-hot-toast";
import {Form, Button} from 'react-bootstrap'
import './forget.css'

const Forget = () => {
 const history = useHistory();
const [email, setEmail] = useState("");

const handleChange = (e) => {
 setEmail(e.target.value);
}
const handleForget = async(e) => {
  e.preventDefault();
  const res = await userInstance.post('auth/forgetPassword', {email});
  if (res.data.code === 200){
    toast.success("OTP send to your Email", {id: 'A'})
    history.push({
      pathname: "/otpverify",
      state: {email,forget:true}
    })
  }else {
    toast.error("Some error occurd");
  }
  // (singup(value.email, value.password, value.remember))
}

    return(
        <div className="login-page forget-page">
        <div className="login-form">
          <h6>Forget Password</h6>
          <p>Enter Your Eamil and we will send a link to reset your Password</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={handleChange} />
            </Form.Group>
  
            
            <Button variant="primary" type="submit" onClick={handleForget} >
              Submit
            </Button>
            <h6>
              Go to <Link to="/singup">Login</Link>
            </h6>
          </Form>
        </div>
      </div>
    
    )
}
export default Forget