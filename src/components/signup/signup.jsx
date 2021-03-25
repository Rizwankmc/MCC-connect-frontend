import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./signup.css";
import { userInstance } from "../../axios";
import { useHistory } from 'react-router-dom';
import toast from "react-hot-toast";

const Signup = () => {
  const history = useHistory();
  const [ value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
    
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }
  const handleSignUp = async(e) => {
    e.preventDefault();
    const res = await userInstance.post('auth/register/user', value);
    if (res.data.code === 200){
      toast.success("Resgistration Successful!!");
      history.push({
        pathname:'/otpverify',
        state: {email: value.email, forget:false}
      })
    }else {
      toast.error("Some error occurd");
    }
    // (singup(value.email, value.password, value.remember))
  }


  return (
    <div className="login-page sign-up">
      <div className="login-form">
        <h6>SignUp Form</h6>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="username" type="name" placeholder="User Name" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSignUp}>
            Submit
          </Button>
          <h6>
            Do  you have an account? <Link to="/login">Login here</Link>
          </h6>
        </Form>
      </div>
      <div className="circle-one"></div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
      <div className="circle-four"></div>
    </div>
  );
};
export default Signup;
