import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import ProductListContainer from "./containers/ProductListContainer";
import LoginContainer from './containers/LoginContainer';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import HomeComponent from './components/HomeComponent';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
          <HeaderComponent/>
          <Switch>
            <Route exact path = "/" component = {HomeComponent} ></Route>
            <Route exact path = "/login" component = {LoginContainer} ></Route>
            <Route exact path = "/userlist" component = {ProductListContainer} ></Route>
            <Redirect to = "#"></Redirect>
          </Switch>
        <FooterComponent/>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
