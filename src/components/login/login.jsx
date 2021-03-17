import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h6>Login</h6>
        <p>Welcome Back , Please Login to your account</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
		  <div className="forget-pwd">
		  <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
		  <h6>Forget Password</h6>
		  </div>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
		  <h6>Don't have an account? <span>Signup</span></h6>
        </Form>
      </div>
    <div className="circle-one"></div>
	<div className="circle-two"></div>
	</div>
  );
};
export default Login;
