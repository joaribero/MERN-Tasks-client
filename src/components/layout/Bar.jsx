import React,{useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Bar = () => {

    //extract auth information
    const authContext = useContext(AuthContext);
    const {user, userAuthenticated, logOut} = authContext;

    useEffect(() => {

        userAuthenticated();

    },[]);



    return (  
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hi <span>{user.name}</span>!</p> : null}          
            <nav className="nav-principal">
                <button className='btn btn-blank cerrar-sesion'
                    onClick={() => logOut()}
                    >Log Out</button>
            </nav>
        </header>
    );
}
 
export default Bar;
