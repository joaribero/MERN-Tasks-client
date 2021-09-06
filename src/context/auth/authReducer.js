import { ERR_LOGIN, ERR_REGISTER, GET_USER, LOG_OUT, SUCC_LOGIN, SUCC_REGISTER } from "../../types";


// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        
        case SUCC_LOGIN:
        case SUCC_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }

        case LOG_OUT:    
        case ERR_LOGIN: 
        case ERR_REGISTER:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload
            }
        
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload
            }

        default:
            return state;
    }
}