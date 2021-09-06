import React,{useContext,useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({component: Component, ...props}) => {
    
    //we use this component to route the components who need previous authentication.
    //works like a "middlware component" between the ones who doesnt need auth and the ones who does.
    const authContext = useContext(AuthContext);
    const {authenticated} = authContext;
  
    return (  
        <Route {...props} render={props => !authenticated ? (
            //if it's not auth then redirect to home
            <Redirect to="/"/>
        ) : (

            //if it's auth continue with the next route and send props.
            <Component {...props}/>
        )}/>
    );
}
 
export default PrivateRoute;
