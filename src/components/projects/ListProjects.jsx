import React,{useContext, useEffect} from 'react';
import ProjectM from './Project.jsx';
import ProjectContext from '../../context/projects/projectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListProjects = () => {
    
    //obtain form state
    const ProjectsContext = useContext(ProjectContext);
    const { projectsList, getProjects } = ProjectsContext;

    //Get projects when loads the component
    useEffect(() => {
        getProjects();

        //eslint-disable-next-line
    },[]);

    //check if there is any project
    if (projectsList.length === 0) return <p>No projects, start creating one!</p>;

    console.log(projectsList);
    
    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projectsList.map(project => {
                    return <CSSTransition 
                                key={project.id}
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