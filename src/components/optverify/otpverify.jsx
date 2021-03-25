import React, { useState, useEffect } from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import { userInstance } from "../../axios";
import toast from "react-hot-toast";
import {Form, Button} from 'react-bootstrap'


const OtpVerify = () => {
    const location = useLocation();
    const history = useHistory();
const [Verifyotp, setVeirfyOtp] = useState('')
const [email, setEmail] = useState('')
const [isforget, setIsForget] = useState(false)

useEffect(() => {
if(location.state){
    setEmail(location.state.email);
    setIsForget(location.state.forget)
    console.log("vjxkcvk", location.state )
}
}, [location, setEmail])

const handleChange = (e) => {
    setVeirfyOtp(e.target.value);
}

const handleVerifyOtp = async(e) => {
    e.preventDefault();
    const res = await userInstance.post('auth/verify', {email, otp:Verifyotp});
    if (res.data.code === 200){
      toast.success("OTP send to your Email", {id: 'A'})
      if (isforget)
      history.push({
        pathname: "/resetPassword",
        state: email
      });
      else{
        history.push({
            pathname: "/login"
          });
      }
    }else {
      toast.error("Wrong Otp", {id: 'A'} );
    }
    // (singup(value.email, value.password, value.remember))
  }
    return(
        <div className="login-page forget-page">
        <div className="login-form">
          <h6>Enter OTP</h6>
          <p>Enter your OTP here which is send to your phone number</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control type="text" name="otp" placeholder="Enter OTP" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleVerifyOtp}>
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
export default OtpVerify