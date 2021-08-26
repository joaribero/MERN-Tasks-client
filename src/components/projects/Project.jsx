import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const ProjectM = ({project}) => {

     //obtain from state
     const ProjectsContext = useContext(ProjectContext);
     const {currentProject} = ProjectsContext;
    
    return (  
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => {
                currentProject(project)
            }}>
                {project.name}
            </button>
        </li>
    );
}
 
export default ProjectM;