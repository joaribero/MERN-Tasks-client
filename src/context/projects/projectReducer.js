import { ADD_PROJECT, FORM_PROJECT, GET_PROJECTS } from "../../types";



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
                form: false
            }
        default:
            return state;
    }
}