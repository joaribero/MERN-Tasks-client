import React,{Fragment,useContext} from 'react';
import Task from './Task.jsx'
import ProjectContext from '../../context/projects/projectContext';

const ListTasks = () => {
    
    const tareasProyecto = [
        {name: 'Elegir Plataforma', state: true},
        {name: 'Elegir Colores', state: false},
        {name: 'Elegir plataformas de pago', state: false},
        {name: 'Elegir Hosting', state: true},
    ]

    //obtain from state
    const ProjectsContext = useContext(ProjectContext);
    const {project,deleteProject} = ProjectsContext;
    
    //If there is no project selected
    if(!project) return <h2>Select a project</h2>

    //delete a project
    const onClickDelete = () => {
        deleteProject(project.id);
    }


    return (  
        <Fragment>
            <h2>Project: {project.name}</h2>

            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0
                        ?(<li className="tarea">No tasks</li>)
                        : tareasProyecto.map(tarea => (
                        <Task
                         task={tarea}/> 
                    ))
                }
            </ul>

            <button type="button" className="btn btn-eliminar" onClick={onClickDelete}>Delete Project &times;</button>
        </Fragment>
        
    );
}
 
export default ListTasks;