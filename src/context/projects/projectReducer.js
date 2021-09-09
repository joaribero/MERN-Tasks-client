import { ADD_PROJECT, CURR_PROJECT, DELETE_PROJECT, ERR_PROJECT, FORM_PROJECT, GET_PROJECTS, VALIDATE_FORM } from "../../types";


// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        
        case GET_PROJECTS:
            return {
                ...state,
                projectsList: action.payload
            }

        case ADD_PROJECT:
            return {
                ...state,
                projectsList: [action.payload, ...state.projectsList],
                form: false,
                errorform: false
            }
        
        case VALIDATE_FORM:
            return {
                ...state,
                errorform: true
            }

        case CURR_PROJECT:
            return{
                ...state,
                project: action.payload
            }
        
        case DELETE_PROJECT:
            return{
                ...state,
                projectsList: state.projectsList.filter(project => project._id !== action.payload),
                project: null
            }

        case ERR_PROJECT:
            return{
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}