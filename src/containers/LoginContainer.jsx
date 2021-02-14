import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import LoginComponent from "../components/LoginComponent";

import {schema} from '../shared/loginSchema';
import { emailErrorAction, emailPasswordAction, emailAction, passwordAction} from "../actions/loginActions";
import { LoginAPI } from "../api/LoginAPI";

const LoginContainer = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const result = useSelector((state) => state.loginReducer);

    const submitForm = (e) => {
        e.preventDefault();
        schema.validate ({
            email: result.email, 
            password: result.password
        },{abortEarly: false}
        ).then((res)=> {
            console.log(res);
            console.log("in then");
            LoginAPI({result,history});
        }).catch((err) => {
            let errObj = {}
            for(let{path, message} of (err.inner)){
                errObj[path] = message
            }  
            if(errObj.email)
            {
                dispatch(emailErrorAction(errObj.email));
            }
            if(errObj.password)
            {
                dispatch(emailPasswordAction(errObj.password));
            }
            console.log(errObj);
         })
    };

    const handleEmailChange=(e)=> {
        dispatch(emailAction({e,result}));
    }

    const handlePasswordChange=(e)=>{
        dispatch(passwordAction({e,result}));
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
