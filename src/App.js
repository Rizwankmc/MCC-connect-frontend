import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/login/login';
import Home from './components/home/index';
import Signup from './components/signup/signup.jsx';
import Landing from './components/landing/landing';
import Page404 from './components/404';
import Forget from './components/forget/forget'
import OtpVerify from './components/optverify/otpverify'
import ResetPassword from './components/reset/reset';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={ Landing } />
          <Route path='/dashboard' exact component={ Home } />
          <Route path='/login' exact component={ Login } />
          <Route path='/singup' exact component={ Signup } />
          <Route path='/forget' exact component={ Forget } />
          <Route path='/otpverify' exact component={ OtpVerify } />
          <Route path='/resetPassword' exact component={ ResetPassword } />
          <Route path='/*' exact component={ Page404 } />
          
        </Switch>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
