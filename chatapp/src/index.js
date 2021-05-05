import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from "./component/auth/SignUp";
import firebase from "./firebase"
import Login from './component/auth/Login'

const Root = () => {
  return(<Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </Router>);
  
}


ReactDOM.render(<Root />,document.getElementById('root'));

