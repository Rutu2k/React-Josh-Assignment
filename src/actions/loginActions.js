import LOGIN_REDUCERS, {PRODUCT_LIST_REDUCER} from "../shared/actionConstants";

export const emailAction = ({e,result}) => {
    return {
        type: LOGIN_REDUCERS.SET_EMAIL, 
        payload: {
            email: e.target.value, 
            emailError:result.emailError = ""
        }
    }
}

export const passwordAction = ({e,result}) => {
    return {
        type: LOGIN_REDUCERS.SET_PASSWORD, 
        payload: {
            password: e.target.value, 
            passwordError:result.passwordError = ""
        }
    }
}

export const emailErrorAction = (data) => {
    return {
        type: LOGIN_REDUCERS.SET_EMAIL_ERROR, 
        payload: {emailError: data}
    }
}

export const emailPasswordAction = (data) => {
    return {
        type: LOGIN_REDUCERS.SET_PASSWORD_ERROR, 
        payload: {emailError: data}
    }
}

export const productListAction = (data) => {
    return {
        type: PRODUCT_LIST_REDUCER.SET_USERLIST, 
        payload: {userlist: data}
    }
}