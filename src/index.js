import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "./reducers/loginReducer";

import ProductListContainer from "./containers/ProductListContainer";
import LoginContainer from './containers/LoginContainer';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(loginReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
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
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
