import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/index';
import Signup from './components/signup/signup';
import Landing from './components/landing/landing';
import Page404 from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/dashboard' exact>
            <Home />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
