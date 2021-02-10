import { useReducer } from "react";
import { withRouter } from "react-router-dom";
import * as yup from 'yup';
import { Form, Col, UncontrolledPopover, PopoverBody, FormFeedback, FormGroup, Label, Input, Button, Container, Row } from "reactstrap";


const axios = require('axios').default;

let initialState = {
    email : '',
    password : '',
    emailError : '',
    passwordError : ''
}
let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required().min(4).max(10)
});
const LoginContainer = (props) => {

    const loginAPI = () => {
        axios.post('https://reqres.in/api/login' , {
            email: loginState.email,
            password: loginState.password
        }).then((response) => {  
            console.log(response);
            if(response.status === 200){
                props.history.push("/userlist");
            }
            else{
                alert("Wrong credentials");
            }
        }, (error) => {
        alert("Invalid credentials");
        console.log(error);
        });
    }

    const loginReducer = (state, action) => {
        const { type, payload } = action;
        switch (type) {
            case "updateEmail":
                return {...state, email: payload.email}
            case "updatePassword":
                return {...state, password: payload.password}
            case "updateEmailError":
                return {...state, emailError: payload.emailError}
            case "updatePasswordError":
                return {...state, passwordError: payload.passwordError}
            default:
                return state;
        }
    }

    const [loginState, dispatch] = useReducer(loginReducer, initialState);

    const submitForm = (e) => {
        e.preventDefault();
        schema.validate (
            {email: loginState.email, 
            password: loginState.password},{abortEarly: false}
        ).then((res)=> {
            console.log(res);
            loginAPI();
        }).catch((err) => {
            console.log("in catch")
            let errObj = {}
            for(let{path, message} of (err.inner)){
                errObj[path] = message
            }  
            if(errObj.email)
            {
                dispatch({type: "updateEmailError", payload: {emailError: errObj.email}})
            }
            if(errObj.password)
            {
                dispatch({type: "updatePasswordError", payload: {passwordError: errObj.password}})
            }
            console.log(errObj);
         })
    };

    const handleEmailChange=(e)=> {
        e.preventDefault();
        dispatch({type: "updateEmail", payload: {email: e.target.value}})
    }

    const handlePasswordChange=(e)=>{
        e.preventDefault();
        dispatch({type: "updatePassword", payload: {password: e.target.value}})
    }
    return(
        <Container>
        <Row className = " bg-secondary  d-flex justify-content-xl-center mt-5 p-5">
        <Form md = {8} className=" form shadow p-3 mb-3 bg-white rounded mb-0 col-md-6 align-self-center" onSubmit={submitForm}>
            <h3 className="text-center pt-3 p-2 ">Login</h3>
            <h6 className="text-center mb-3">Welcome User!</h6>

            <Col className ="mx-2">
                <FormGroup>
                <Label>Email</Label>
                <Input 
                // type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value = {loginState.email}
                    onChange = {handleEmailChange}
                    required
                    invalid = {loginState.emailError !== ""}
                />
                <FormFeedback type="invalid" target="exampleEmail">{loginState.emailError}</FormFeedback>
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
                    value={loginState.password}
                    onChange={handlePasswordChange}
                    required
                    invalid = {loginState.passwordError !== ""}
                    Launch Popover 
                />
                <FormFeedback type="invalid" target="exampleEmail">{loginState.passwordError}</FormFeedback>
                <UncontrolledPopover placement="left" trigger="hover" target="examplePassword">
                    <PopoverBody>Password should have minimum 8 characters, can contain: alphanumeric characters, @ # . _ </PopoverBody>
                </UncontrolledPopover>
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

export default withRouter(LoginContainer);
