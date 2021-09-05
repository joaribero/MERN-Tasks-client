import React,{useReducer} from 'react';
import { ERR_REGISTER, SUCC_REGISTER } from '../../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';

const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //functions
    const registerUser = async data => {
        try {

            const response = await clientAxios.post('/api/users', data);
            console.log(response);

            dispatch({
                type: SUCC_REGISTER
            })
            
        } catch (error) {
            console.log(error);

            dispatch({
                type: ERR_REGISTER
            })
        }
    }
    
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;