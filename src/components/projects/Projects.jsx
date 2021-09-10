import React,{useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
import AuthContext from '../../context/auth/authContext';

const Projects = () => {

    //extract auth information
    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() => {

        userAuthenticated();
        // eslint-disable-next-line
    },[]);

    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                
                <Bar/>

                <main>
                    <FormTask/>
                    <div className="contenedor-tareas">
                        <ListTasks/> 
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;