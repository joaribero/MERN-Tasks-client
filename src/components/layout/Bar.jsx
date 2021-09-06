import React,{useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Bar = () => {

    //extract auth information
    const authContext = useContext(AuthContext);
    const {user, userAuthenticated} = authContext;

    useEffect(() => {

        userAuthenticated();

    },[]);



    return (  
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hi <span>{user.name}</span>!</p> : null}          
            <nav className="nav-principal">
                <a href="#!">Log Out</a>
            </nav>
        </header>
    );
}
 
export default Bar;
