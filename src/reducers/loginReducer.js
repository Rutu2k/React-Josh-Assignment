import LOGIN_REDUCERS from "../shared/actionConstants";

let initialState = {
    email : '',
    password : '',
    emailError : '',
    passwordError : ''
}

const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_REDUCERS.SET_EMAIL:
            return {...state, email: payload.email}
        case LOGIN_REDUCERS.SET_PASSWORD:
            return {...state, password: payload.password}
        case LOGIN_REDUCERS.SET_EMAIL_ERROR:
            return {...state, emailError: payload.emailError}
        case LOGIN_REDUCERS.SET_PASSWORD_ERROR:
            return {...state, passwordError: payload.passwordError}
        default:
            return state;
    }
}

export default loginReducer;