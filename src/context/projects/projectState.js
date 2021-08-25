import React, { useReducer} from 'react';
import uuid,{v4 as uuidv4} from 'uuid';

import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types';



const ProjectState = props => {

    const projects = [
        {id: 1, name: 'Tienda virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Diseño de sitio web'}
    ]

    const initialState = {
        projectsList : [],
        form: false
    }

    //dispatch to execute actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    //series of functions for CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //obtain the projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Add new project
    const addProject = project => {
        project.id = uuidv4();

        //insert project in state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    return (
        <ProjectContext.Provider value={{
            projectsList: state.projectsList,
            form: state.form,
            showForm,
            getProjects,
            addProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;