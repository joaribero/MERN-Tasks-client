import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const ProjectM = ({project}) => {

     //obtain from project state
     const ProjectsContext = useContext(ProjectContext);
     const {currentProject} = ProjectsContext;
    
    //obtain from tasks state
    const TasksContext = useContext(TaskContext);
    const {getTasks} = TasksContext;

    // Function to add current project
    const selectProject = project => {
        currentProject(project);
        getTasks(project.id);
    }

    return (  
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => {
                selectProject(project)
            }}>
                {project.name}
            </button>
        </li>
    );
}
 
export default ProjectM;