import React,{useContext} from 'react';
import TaskContext from '../../context/tasks/taskContext';
import ProjectContext from '../../context/projects/projectContext';

const Task = ({task}) => {
    
    //obtain data from project state
    const ProjectsContext = useContext(ProjectContext);
    const {project} = ProjectsContext;
    
    //obtain from tasks state
    const TasksContext = useContext(TaskContext);
    const {deleteTask, getTasks} = TasksContext;
    
    //function when user clicks delete button
    const taskDelete = id => {
        deleteTask(id);
        getTasks(project.id);
    }

    return (  
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state 
                    ? (
                        <button type="button" className="completo"> Done</button>
                    )
                    : (
                        <button type="button" className="incompleto"> Undone</button>
                    )
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn btn-primario">Edit</button>
                <button type="button" 
                    className="btn btn-secundario" 
                    onClick={() => taskDelete(task.id)}
                    >Delete</button>
            </div>
        </li>
    );
}
 
export default Task;