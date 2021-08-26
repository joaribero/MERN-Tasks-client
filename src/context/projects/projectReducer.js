import { ADD_PROJECT, CURR_PROJECT, DELETE_PROJECT, FORM_PROJECT, GET_PROJECTS, VALIDATE_FORM } from "../../types";



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
                projectsList: [...state.projectsList, action.payload],
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
                projectsList: state.projectsList.filter(project => project.id !== action.payload),
                project: null
            }
        default:
            return state;
    }
}