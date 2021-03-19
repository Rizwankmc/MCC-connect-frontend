import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from "react-bootstrap";
import { login } from "../../actions/authActions";
import "./login.css";
import toast  from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: '',
    password: '',
    remembe: false
    })

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if(userInfo) {
      window.location.href='/dashboard'
    }
    if(error) {
      toast.success(error,{id:'A'});
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(value.email, value.password, value.remember))
  }
  return (
    <div className="login-page">
      <div className="login-form">
        <h6>Login</h6>
        <p>Welcome Back , Please Login to your account</p>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
          </Form.Group>
          <div className="forget-pwd">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name="remember" label="Remember Me" onChange={handleChange}/>
            </Form.Group>
            <h6>Forget Password</h6>
          </div>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
          <h6>
            Don't have an account? <Link to="/singup">Signup</Link>
          </h6>
        </Form>
      </div>
      <div className="circle-one"></div>
      <div className="circle-two"></div>
    </div>
  );
};
export default Login;
