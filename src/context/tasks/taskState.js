import React,{useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import clientAxios from '../../config/axios';
import { 
    ADD_TASK,
    CLEAN_TASK,
    CURR_TASK,
    DELETE_TASK,
    EDIT_TASK,
    STATE_TASK,
    TASKS_PROJECT, 
    VALIDATE_TASK
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasksproject: [],
        taskerror: false,
        selectedtask: null

    }

    const [state,dispatch] = useReducer(TaskReducer,initialState);

    //functions

    //obtain tasks of the project
    const getTasks = async project => {
        
        try {

            const response = await clientAxios.get('/api/tasks',{params: {project}});
            console.log(response);

            dispatch({
                type: TASKS_PROJECT,
                payload: response.data
            })

        } catch (error) {
            console.log(error);
        }
    }

    //create a new task
    const addTask = async task => {
        
        try {
            const response = await clientAxios.post('/api/tasks',task);

            dispatch({
                type: ADD_TASK,
                payload: task
            })

        } catch (error) {
            console.log(error);
        }

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

    //change state of the task
    const changeTaskState = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    //Extract the current task
    const setCurrentTask = task => {
        dispatch({
            type: CURR_TASK,
            payload: task
        })
    }

    //edit task
    const editTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    //clean selected task
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasksproject: state.tasksproject,
                taskerror: state.taskerror,
                selectedtask: state.selectedtask, 
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskState,
                setCurrentTask,
                editTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;