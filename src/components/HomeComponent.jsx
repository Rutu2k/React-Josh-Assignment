import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductListContainer from "../containers/ProductListContainer";
import LoginComponent from './LoginComponent';
import UserProfileComponent from './UserProfileComponent';
 
class HomeComponent extends Component{
 
    render(){
        return(
        <div>
         <Switch>
          <Route exact path = "/login" component = {LoginComponent} ></Route>
          <Route exact path = "/userlist" component = {ProductListContainer} ></Route>
          <Route exact path = "/userProfile" component = {UserProfileComponent} ></Route>
          <Redirect to = "/login"></Redirect>
        </Switch>
        </div>
      );
    }
  }

export default HomeComponent;
  