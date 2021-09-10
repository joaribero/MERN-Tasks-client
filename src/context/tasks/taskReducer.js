import { ADD_TASK, 
    CLEAN_TASK, 
    CURR_TASK, 
    DELETE_TASK, 
    EDIT_TASK, 
    TASKS_PROJECT, 
    VALIDATE_TASK 
} from "../../types";


// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        
        case TASKS_PROJECT:
            return{
                ...state,
                tasksproject: action.payload
            }
        
        case ADD_TASK:
            return {
                ...state,
                tasksproject: [action.payload, ...state.tasksproject],
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
                tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
            }
        
        case EDIT_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task) 
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