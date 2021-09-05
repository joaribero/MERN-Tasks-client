import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const NewAccount = () => {

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {registerUser} = authContext;

    const [user, setUser] = useState({
        uname: '',
        email: '',
        password: '',
        confirmP: ''
    });

    //extract user
    const {uname,email, password,confirmP} = user;
    
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
        if (uname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmP.trim() === '') {
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        //Min length password
        if (password.length < 6) {
            showAlert('The password must have at least 6 characters', 'alerta-error');
            return;
        }

        //Equal passwords
        if (password !== confirmP) {
            showAlert('The password does not match', 'alerta-error');
            return;
        }
        const name = uname;

        //Send credentials to action
        registerUser({name, email, password});
    }

    return (  
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="div contenedor-form sombra-dark">
                <h1>Create a new account</h1>

                <form onSubmit={onSubmit}>
                    
                    <div className="campo-form">
                        <label htmlFor="text">Name</label>
                        <input type="text" 
                            name="uname" 
                            id="text"
                            placeholder="Your name"
                            value={uname}
                            onChange={onChangeLogin} 
                        />
                    </div>
                    
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
                        <label htmlFor="confirm">Confirm password</label>
                        <input type="password" 
                            name="confirmP" 
                            id="password"
                            placeholder="Repeat password"
                            value={confirmP}
                            onChange={onChangeLogin} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" value="Register" className="btn btn-primario btn-block"/>
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Sign up with an existing account
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;
