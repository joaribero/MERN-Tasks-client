import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const FormTask = () => {

    //obtain data from state
    const ProjectsContext = useContext(ProjectContext);
    const {project} = ProjectsContext;

    //If there is no project selected
    if(!project) return null;

    return (  
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder ="Task name..." name="name" />
                </div>
                <div className="contenedor-input">
                    <input type="submit"  className="btn btn-primario btn-submit btn-block" value="Add task"/>
                </div>
            </form>
        </div>
    );
}
 
export default FormTask;