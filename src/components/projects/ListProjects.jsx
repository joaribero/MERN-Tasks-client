import React,{useContext, useEffect} from 'react';
import ProjectM from './Project.jsx';
import ProjectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListProjects = () => {
    // eslint-disable-next-line
    const nodeRef = React.useRef(null); //Prevent findDOMNode and StrictMode Warning

    //obtain form state
    const ProjectsContext = useContext(ProjectContext);
    const { projectsList, message, getProjects } = ProjectsContext;

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    //Get projects when loads the component
    useEffect(() => {
        if(message){
            showAlert(message.msg, message.category);
        }

        getProjects();

        //eslint-disable-next-line
    },[message]);

    //check if there is any project
    if (projectsList.length === 0) return <p>No projects, start creating one!</p>;
    
    return (  
        <ul className="listado-proyectos">

            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}

            <TransitionGroup>
                {projectsList.map(project => {
                    return <CSSTransition 
                                key={project._id}
                                timeout={200}
                                classNames="proyecto">
                        <ProjectM project={project}/>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListProjects;