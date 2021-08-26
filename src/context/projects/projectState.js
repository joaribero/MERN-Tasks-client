import React, { useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURR_PROJECT,
    DELETE_PROJECT
} from '../../types';



const ProjectState = props => {

    const projects = [
        {id: 1, name: 'Tienda virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Diseño de sitio web'}
    ]

    const initialState = {
        projectsList : [],
        form: false,
        errorform: false,
        project: null
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

    //validate form
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //Select project
    const currentProject = project => {
        dispatch({
            type: CURR_PROJECT,
            payload: project
        })
    }

    //delete project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <ProjectContext.Provider value={{
            projectsList: state.projectsList,
            form: state.form,
            errorform: state.errorform,
            project: state.project,
            showForm,
            getProjects,
            addProject,
            showError,
            currentProject,
            deleteProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;