import React,{useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { 
    ADD_TASK,
    DELETE_TASK,
    TASKS_PROJECT, 
    VALIDATE_TASK
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            {id: 1, name: 'Elegir Plataforma', state: true, projectId: 1},
            {id: 2, name: 'Elegir Colores', state: false, projectId: 2},
            {id: 3, name: 'Elegir plataformas de pago', state: false, projectId: 3},
            {id: 4, name: 'Elegir Hosting', state: true, projectId: 4},
            {id: 5, name: 'Elegir Plataformaasf', state: true, projectId: 1},
            {id: 6, name: 'Elegir Coloresasfsaf', state: false, projectId: 2},
            {id: 7, name: 'Elegir plataformas de pagoasfasf', state: false, projectId: 3},
            {id: 8, name: 'Elegir Hostingasfsaf', state: true, projectId: 4}
        ],
        tasksproject: [],
        taskerror: false

    }

    const [state,dispatch] = useReducer(TaskReducer,initialState);

    //functions

    //obtain tasks of the project
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    //create a new task
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    //validate and show error message
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    //delete task by id
    const deleteTask = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                taskerror: state.taskerror, 
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;