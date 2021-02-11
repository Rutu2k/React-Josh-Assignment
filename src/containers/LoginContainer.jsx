import { useReducer } from "react";
import { withRouter } from "react-router-dom";
import * as yup from 'yup';
import LoginComponent from "../components/LoginComponent";

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
        dispatch({type: "updateEmail", payload: {email: e.target.value, emailError:loginState.emailError=""}})
    }

    const handlePasswordChange=(e)=>{
        dispatch({type: "updatePassword", payload: {password: e.target.value, emailError:loginState.emailError=""}})
    }
    return(
        <LoginComponent 
        submitButton = {submitForm}
        loginState = {loginState}
        handleEmailChange = {handleEmailChange}
        handlePasswordChange = {handlePasswordChange}
        />
    );
}

export default withRouter(LoginContainer);
