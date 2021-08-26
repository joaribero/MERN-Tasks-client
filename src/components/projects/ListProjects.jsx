import React,{useContext, useEffect} from 'react';
import ProjectM from './Project.jsx';
import ProjectContext from '../../context/projects/projectContext';

const ListProjects = () => {
    
    //obtain form state
    const ProjectsContext = useContext(ProjectContext);
    const { projectsList, getProjects } = ProjectsContext;

    //Get projects when loads the component
    useEffect(() => {
        getProjects();
    },[]);

    //check if there is any project
    if (projectsList.length === 0) return <p>No projects, start creating one!</p>;

    console.log(projectsList);
    
    return (  
        <ul className="listado-proyectos">
            {projectsList.map(project => {
                return <ProjectM key={project.id} project={project}/>
            })}
        </ul>
    );
}
 
export default ListProjects;