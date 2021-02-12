import React from "react";
import { Form, Col, UncontrolledPopover, PopoverBody, FormFeedback, FormGroup, Label, Input, Button, Container, Row } from "reactstrap";

const LoginComponent = (props) => {
    return(
        <Container>
        <Row className = " bg-dark  d-flex justify-content-xl-center m-5 p-5">
        <Form md = {8} className=" form shadow p-3 mb-3 bg-white rounded mb-0 col-md-6 align-self-center" onSubmit={props.submitButton}>
            <h3 className="text-center pt-3 p-2 ">Login</h3>
            <h6 className="text-center mb-3">Welcome User!</h6>

            <Col className ="mx-2">
                <FormGroup>
                <Label>Email</Label>
                <Input 
                    //type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value = {props.loginState.email}
                    onChange = {props.handleEmailChange}
                    required
                    invalid = {props.loginState.emailError !== ""}
                />
                <FormFeedback type="invalid" target="exampleEmail">{props.loginState.emailError}</FormFeedback>
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
                    value={props.loginState.password}
                    onChange={props.handlePasswordChange}
                    required
                    invalid = {props.loginState.passwordError !== ""}
                    Launch Popover 
                />
                <FormFeedback type="invalid" target="exampleEmail">{props.loginState.passwordError}</FormFeedback>
                <UncontrolledPopover placement="left" trigger="hover" target="examplePassword">
                    <PopoverBody>Password should have minimum 8 characters, can contain: alphanumeric characters, @ # . _ </PopoverBody>
                </UncontrolledPopover>
                </FormGroup>
            </Col>
            <Col className="text-center mt-5 mb-5">
            <Button variant="dark" size="lg" block>Submit</Button>
            </Col>
        </Form>
        </Row>
        </Container>
    );
} 
export default LoginComponent;