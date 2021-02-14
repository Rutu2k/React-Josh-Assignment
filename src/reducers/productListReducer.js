import  { PRODUCT_LIST_REDUCER } from "../shared/actionConstants";
let initialState = {
    userlist : []
}

const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_LIST_REDUCER.SET_USERLIST:
            return {...state, userlist: payload.userlist}
        default:
            return state;
    }
}

export default loginReducer;