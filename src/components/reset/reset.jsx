import React, { useState, useEffect } from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import { userInstance } from "../../axios";
import toast from "react-hot-toast";
import {Form, Button} from 'react-bootstrap'


const Reset = () => {
  const location = useLocation();
  const history = useHistory();
  const [resetPassword, setResetPassword] = useState({
    email:'',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if(location.state){
      setResetPassword({
        ...resetPassword,
        email: location.state
      });
    }
    },[location, resetPassword])
    
    const handleChange = (e) => {
      setResetPassword({
        ...resetPassword,
        [e.target.name]:e.target.value
      })
    }

  const handleResetPassword = async(e) => {
    e.preventDefault();
    if (resetPassword.password !== resetPassword.confirmPassword){
return toast.error("Password not match", {id: 'A'});
    }
    const res = await userInstance.post('auth/resetPassword', resetPassword);
    if (res.data.code === 200){
      toast.success("success", {id: 'A'})
      history.push({
        pathname: "/login"
      });
    }else {
      toast.error("Wrong", {id: 'A'} );
    }
  }
    return(
        <div className="login-page Reset-page">
        <div className="login-form">
          <h6>Reset Password</h6>
          <p>Enter Your Eamil and we will send a link to reset your Password</p>
          <Form onSubmit={(e) =>handleResetPassword(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> New Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="New Password" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Confirm Passsword</Form.Label>
              <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password"  onChange={handleChange} />
            </Form.Group>
  
            
            <Button variant="primary" type="submit" >
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
export default Reset