import React,{ Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, FormGroup, Label, Input, Button, Container, Row } from "reactstrap";
const axios = require('axios').default;

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            email: '',
            currentUser: '',
            password: '',
        };
    };
    correctLogin = () =>{
        for(let i = 0; i < this.users.length;i++){
            if(this.state.email === this.users[i].email && 
                this.state.password === this.users[i].password){
                    localStorage.setItem("id", this.users[i].id);
                    localStorage.setItem("first_name", this.users[i].first_name);
                    localStorage.setItem("last_name", this.users[i].last_name);
                    localStorage.setItem("email", this.users[i].email);
                    localStorage.setItem("photo", this.users[i].photo);
                return true;
            }
        }
    }
    
    submitForm = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/usersList')
        .then((response) => {  
            console.log(response.data);
            this.users = response.data;
            if(this.correctLogin()){
               console.log(this.currentUser);
               this.props.history.push("/userProfile");
            }
            else{
                alert("Wrong credentials");
            }
        }, (error) => {
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
            <Form md = {8} className=" form shadow p-3 mb-3 bg-white rounded mb-0 col-md-6 align-self-center" onSubmit={this.submitForm}>
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
                <Button variant="primary" size="lg" block>Submit</Button>
                </Col>
            </Form>
            </Row>
            </Container>
        );
    }
} 
export default withRouter(LoginComponent);