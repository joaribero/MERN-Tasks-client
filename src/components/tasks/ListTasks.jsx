import React,{Fragment,useContext} from 'react';
import Task from './Task.jsx'
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListTasks = () => {
    // eslint-disable-next-line
    const nodeRef = React.useRef(null);

    //obtain from project state
    const ProjectsContext = useContext(ProjectContext);
    const {project,deleteProject} = ProjectsContext;

    //obtain from tasks state
    const TasksContext = useContext(TaskContext);
    const {tasksproject} = TasksContext;

    
    //If there is no project selected
    if(!project) return <h2>Select a project</h2>

    //delete a project
    const onClickDelete = () => {
        deleteProject(project._id);
    }


    return (  
        <Fragment>
            <h2>Project: {project.name}</h2>

            <ul className="listado-tareas">
                {
                    tasksproject.length === 0
                        ?(<li className="tarea">No tasks</li>)
                        : 
                        <TransitionGroup>
                            {tasksproject.map(task => (
                                <CSSTransition 
                                    key={task._id}
                                    timeout={200}
                                    classNames="tarea">
                                    <Task
                                        task={task}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>

            <button type="button" className="btn btn-eliminar" onClick={onClickDelete}>Delete Project &times;</button>
        </Fragment>
        
    );
}
 
export default ListTasks;