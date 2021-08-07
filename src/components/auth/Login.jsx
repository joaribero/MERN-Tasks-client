import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    
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
        e.preventDefaut();

        //Validation of empty fields

        //Send credentials to action
    }

    return (  
        <div className="form-usuario">
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
