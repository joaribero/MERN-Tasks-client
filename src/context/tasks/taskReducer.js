import { ADD_TASK, 
    DELETE_TASK, 
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
                tasks: [...state.tasks, action.payload],
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
        
        default:
            return state;
    }
}