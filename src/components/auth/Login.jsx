import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';


const Login = (props) => {
    
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, authenticated, logIn} = authContext;

    //when user authenticate or register
    useEffect(() => {

        if(authenticated) {
            props.history.push('/projects');
        }

        if(message) {
            showAlert(message.msg, message.category);
        }

    }, [message, authenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    //extract user
    const {email, password} = user;
    
    const onChangeLogin = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //when user submit credentials
    const onSubmit = e => {
        e.preventDefault();

        //Validation of empty fields
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required','alerta-error');
        }

        //Send credentials to action
        logIn({email, password});


    }

    return (  
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="div contenedor-form sombra-dark">
                <h1>Sign In</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                            name="email" 
                            id="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChangeLogin} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                            name="password" 
                            id="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChangeLogin} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" value="Accept" className="btn btn-primario btn-block"/>
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    Create new account
                </Link>
            </div>
        </div>
    );
}
 
export default Login;
