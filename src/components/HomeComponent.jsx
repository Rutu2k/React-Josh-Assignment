import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductListContainer from "../containers/ProductListContainer";
// import LoginComponent from './LoginComponent';
import LoginContainer from '../containers/LoginContainer';

class HomeComponent extends Component{
 
    render(){
        return(
        <div>
         <Switch>
          {/* <Route exact path = "/login" component = {LoginComponent} ></Route> */}
          <Route exact path = "/login" component = {LoginContainer} ></Route>
          <Route exact path = "/userlist" component = {ProductListContainer} ></Route>
          <Redirect to = "/login"></Redirect>
        </Switch>
        </div>
      );
    }
  }

export default HomeComponent;
  