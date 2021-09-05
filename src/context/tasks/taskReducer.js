import { ADD_TASK, 
    CLEAN_TASK, 
    CURR_TASK, 
    DELETE_TASK, 
    EDIT_TASK, 
    STATE_TASK, 
    TASKS_PROJECT, 
    VALIDATE_TASK 
} from "../../types";


// eslint-disable-next-line
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
        
        case EDIT_TASK:
        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) 
            }

        case CURR_TASK:
            return{
                ...state,
                selectedtask: action.payload
            }
        
        case CLEAN_TASK:
            return{
                ...state,
                selectedtask: null
            }

        default:
            return state;
    }
}