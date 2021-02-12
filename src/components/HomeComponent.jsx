import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import homeImg from '../Images/Home.jpg';

class HomeComponent extends Component{
    render(){
        return(
        <div>
          <Container>
            <Row>
              <Col className = "p-3">
              <img src = {homeImg} alt = "laptop "/>
              </Col>
              <Col className = "p-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }

export default HomeComponent;
  