import { withRouter } from "react-router-dom";
import {schema} from '../shared/loginSchema';
import LoginComponent from "../components/LoginComponent";
import { useDispatch, useSelector } from "react-redux";
import LOGIN_REDUCERS from "../shared/actionConstants";

const axios = require('axios').default;

const LoginContainer = (props) => {

    const dispatch = useDispatch();
    const result = useSelector(state => state);

    const loginAPI = () => {
        axios.post('https://reqres.in/api/login' , {
            email: result.email,
            password: result.password
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
  
    const submitForm = (e) => {
        e.preventDefault();
        schema.validate ({
            email: result.email, 
            password: result.password
        },{abortEarly: false}
        ).then((res)=> {
            console.log(res);
            loginAPI();
        }).catch((err) => {
            let errObj = {}
            for(let{path, message} of (err.inner)){
                errObj[path] = message
            }  
            if(errObj.email)
            {
                dispatch({type: LOGIN_REDUCERS.SET_EMAIL_ERROR, payload: {emailError: errObj.email}})
            }
            if(errObj.password)
            {
                dispatch({type: LOGIN_REDUCERS.SET_PASSWORD_ERROR, payload: {passwordError: errObj.password}})
            }
            console.log(errObj);
         })
    };

    const handleEmailChange=(e)=> {
        dispatch({type: LOGIN_REDUCERS.SET_EMAIL, payload: {email: e.target.value, emailError:result.emailError=""}})
    }

    const handlePasswordChange=(e)=>{
        dispatch({type: LOGIN_REDUCERS.SET_PASSWORD, payload: {password: e.target.value, emailError:result.emailError=""}})
    }
    return(
        <LoginComponent 
        submitButton = {submitForm}
        result = {result}
        handleEmailChange = {handleEmailChange}
        handlePasswordChange = {handlePasswordChange}
        />
    );
}

export default withRouter(LoginContainer);
