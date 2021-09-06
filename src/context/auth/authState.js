import React,{useReducer} from 'react';
import { ERR_LOGIN, ERR_REGISTER, GET_USER, SUCC_LOGIN, SUCC_REGISTER } from '../../types';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

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
            //console.log(response);

            dispatch({
                type: SUCC_REGISTER,
                payload: response.data
            })

            //get user
            userAuthenticated();
            
        } catch (error) {
            //console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERR_REGISTER,
                payload: alert
            })
        }
    }

    //return auth user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: function to send the token in header
            tokenAuth(token);
        }

        try {
            
            const response = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            dispatch({
                type: ERR_LOGIN
            })
        }
    }

    //when user logs in
    const logIn =  async data => {

        try {

            const response = await clientAxios.post('/api/auth', data);
            dispatch({
                type: SUCC_LOGIN,
                payload: response.data
            })

            userAuthenticated();
            
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: ERR_LOGIN,
                payload: alert
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
                registerUser,
                logIn
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;