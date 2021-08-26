import React,{useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { 
    TASKS_PROJECT 
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            {name: 'Elegir Plataforma', state: true, projectId: 1},
            {name: 'Elegir Colores', state: false, projectId: 2},
            {name: 'Elegir plataformas de pago', state: false, projectId: 3},
            {name: 'Elegir Hosting', state: true, projectId: 4},
            {name: 'Elegir Plataformaasf', state: true, projectId: 1},
            {name: 'Elegir Coloresasfsaf', state: false, projectId: 2},
            {name: 'Elegir plataformas de pagoasfasf', state: false, projectId: 3},
            {name: 'Elegir Hostingasfsaf', state: true, projectId: 4},
        ],
        tasksproject: []

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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject, 
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;