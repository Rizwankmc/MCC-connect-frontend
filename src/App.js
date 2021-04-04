import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import Login from './components/login/login';
import Home from './components/home/index';
import Signup from './components/signup/signup.jsx';
import Landing from './components/landing/landing';
import Page404 from './components/404';
import Forget from './components/forget/forget'
import OtpVerify from './components/optverify/otpverify'
import ResetPassword from './components/reset/reset';
import Profile from './components/profile/profile';
import Jobs from './components/jobs/jobs';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.elementType
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route path='/' exact component={ Landing } />
          
          <Route path='/login' exact component={ Login } />
          <Route path='/singup' exact component={ Signup } />
          <Route path='/forget' exact component={ Forget } />
          <Route path='/otpverify' exact component={ OtpVerify } />
          <Route path='/resetPassword' exact component={ ResetPassword } />
          
          {/* Private Routes */}
          <PrivateRoute path='/dashboard' exact component={Home} />
          <PrivateRoute path='/profile' exact component={Profile} />
          <PrivateRoute path='/jobs' exact component={Jobs} />

          {/* 404 Page */}
          <Route path='/*' exact component={Page404} />
        </Switch>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
