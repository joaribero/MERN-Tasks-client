import React,{useContext, useState, useEffect} from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    //obtain data from project state
    const ProjectsContext = useContext(ProjectContext);
    const {project} = ProjectsContext;

    //obtain from tasks state
    const TasksContext = useContext(TaskContext);
    const {taskerror, selectedtask, addTask, validateTask, getTasks, editTask, cleanTask} = TasksContext;

    //Effect detect when a task is selected
    useEffect(() => {
        if(selectedtask !== null) {
            setTask(selectedtask);
        } else {
            setTask({
                name: ''
            })
        }
    }, [selectedtask]);

    //form state
    const [task,setTask] = useState({
        name: ''
    })

    //extract task name
    const {name} = task;

    //If there is no project selected
    if(!project) return null;

    //read values of the form
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }


    // ON SUBMIT FORM
    const onSubmit = e => {
        e.preventDefault();

        //Validate
        if (name.trim() === '') {
            validateTask();
            return
        }

        //checks if it a new task or edit
        if(selectedtask === null) {
            
            //add the new task to the state
            task.project = project._id;
            task.state = false;

            console.log(task);
            addTask(task);
        } else {
            
            //edit current task
            editTask(task);
            //Clean current task from state
            cleanTask();

        }        

        //obtain and filter project's tasks
        getTasks(project.id);

        //reset form
        setTask({
            name: ''
        })
    }

    return (  
        <div className="formulario">
            <form action="" onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input type="text" 
                        className="input-text" 
                        placeholder ="Task name..." 
                        name="name"
                        value= {name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input type="submit"  
                        className="btn btn-primario btn-submit btn-block" 
                        value={selectedtask ? 'Edit task' : 'Add task'}
                    />
                </div>
            </form>

            {taskerror ? <p className="mensaje error">The task name is required</p> : null}
        </div>
    );
}
 
export default FormTask;