// @ts-nocheck
import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
//
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//toast
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth'

//components
import Header from './layout/Header';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
//import {UserContext} from './context/UserContext';
import Footer from './layout/Footer';


import firebaseConfig from './Config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
   
  render(){
  return (
    <Router>
      <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer/>
    </Router>
  );
}}

export default App;
