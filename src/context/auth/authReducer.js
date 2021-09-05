import { ERR_REGISTER, SUCC_REGISTER } from "../../types";


// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        
        case SUCC_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        
        case ERR_REGISTER:
            return {
                ...state,
                token: null,
                message: action.payload
            }
        
        default:
            return state;
    }
}