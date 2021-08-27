import { ADD_TASK, 
    DELETE_TASK, 
    STATE_TASK, 
    TASKS_PROJECT, 
    VALIDATE_TASK 
} from "../../types";



export default (state, action) => {
    switch(action.type) {
        
        case TASKS_PROJECT:
            return{
                ...state,
                tasksproject: state.tasks.filter(task => task.projectId === action.payload)
            }
        
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                taskerror: false
            }

        case VALIDATE_TASK:
            return {
                ...state,
                taskerror: true
            }
        
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasksproject.map(task => task.id === action.payload.id ? action.payload : task) 
            }
        
        default:
            return state;
    }
}