import React,{useEffect} from 'react';
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
import { Provider } from 'react-redux'
import SignUp from "./component/auth/SignUp";
import firebase from "./firebase"
import store from "./store/store"
import PrivateRoute from "./component/auth/PrivateRoute"
import {useHistory} from "react-router-dom";
import Login from './component/auth/Login'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'

const fbConfig={};

const rrfConfig = {
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

const Root = () => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //login olmuş
        history.push("/");
      } else {
        history.push("/login");
      }
    });
  }, []);

  return(
    <Switch>
      <PrivateRoute exact path="/">
        <App/>
      </PrivateRoute>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
    </Switch>);
  
}


ReactDOM.render( <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <Router>
    <Root/>
    </Router>
  </ReactReduxFirebaseProvider>
</Provider>,document.getElementById('root'));

