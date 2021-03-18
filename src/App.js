import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/index';
import Signup from './components/signup/signup.jsx';
import Landing from './components/landing/landing';
import Page404 from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/dashboard' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/singup ' exact component={Signup} />
          <Route path='/error' exact component={Page404} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
