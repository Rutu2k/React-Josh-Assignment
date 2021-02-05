import React,{ Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, FormGroup, Label, Input, Button, Container, Row } from "reactstrap";
const axios = require('axios').default;

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    submitForm = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/login',{
            email: this.state.email,
            password: this.state.password
            }
        )
        .then((response) => {  
            console.log(response)
            this.props.history.push('/userlist')
        }, (error) => {
        alert("Wrong credentials");
        console.log(error);
        });
    };

    handleEmailChange=(e)=> {
        this.setState({email: e.target.value});
    }

    handlePasswordChange=(e)=>{
        this.setState({password: e.target.value});
    }

    render(){
        return(
            <Container>
            <Row className = " bg-secondary mt-5 p-5 d-flex justify-content-xl-center ">
            <Form md = {8} className=" form shadow p-3 mb-3 bg-white rounded mb-0 col-md-6 align-self-center">
                <h3 className="text-center pt-3 p-2 ">Login</h3>
                <h6 className="text-center mb-3">Welcome User!</h6>

                <Col className ="mx-2">
                    <FormGroup>
                    <Label>Email</Label>
                    <Input type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        value={this.state.email}
                        onChange = {this.handleEmailChange}
                        required
                    />
                    </FormGroup>
                </Col> 
                <Col className ="mx-2">
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required
                    />
                    </FormGroup>
                </Col>
                <Col className="text-center mt-5 mb-5">
                <Button variant="primary" size="lg" block onClick = {this.submitForm}>Submit</Button>
                </Col>
            </Form>
            </Row>
            </Container>
        );
    }
} 
export default withRouter(LoginComponent);