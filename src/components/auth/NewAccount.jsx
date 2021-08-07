import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewAccount = () => {
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
        e.preventDefaut();

        //Validation of empty fields

        //Min length password

        //Send credentials to action
    }

    return (  
        <div className="form-usuario">
            <div className="div contenedor-form sombra-dark">
                <h1>Create a new account</h1>

                <form onSubmit={onSubmit}>
                    
                    <div className="campo-form">
                        <label htmlFor="text">Name</label>
                        <input type="text" 
                            name="text" 
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
                            name="password" 
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
