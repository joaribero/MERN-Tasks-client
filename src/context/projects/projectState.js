import React, { useReducer} from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURR_PROJECT,
    DELETE_PROJECT,
    ERR_PROJECT
} from '../../types';

import clientAxios from '../../config/axios'



const ProjectState = props => {

    const initialState = {
        projectsList : [],
        form: false,
        errorform: false,
        project: null,
        message: null
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
    const getProjects = async () => {
        
        try {
            const response = await clientAxios.get('/api/projects');

            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects
            })
            
        } catch (error) {
            const alert = {
                msg: 'There was an error',
                category: 'alerta-error'
            }
            
            dispatch({
                type: ERR_PROJECT,
                payload: alert
            })
        }

    }

    //Add new project
    const addProject = async project => {

        try {
            const response = await clientAxios.post('/api/projects',project);

            //insert project in state
            dispatch({
                type: ADD_PROJECT,
                payload: response.data
            })
        } catch (error) {
            const alert = {
                msg: 'There was an error',
                category: 'alerta-error'
            }
            
            dispatch({
                type: ERR_PROJECT,
                payload: alert
            })
        }
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
    const deleteProject = async projectId => {
        
        try {
            await clientAxios.delete(`/api/projects/${projectId}`);

            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
            
        } catch (error) {
            
            const alert = {
                msg: 'There was an error',
                category: 'alerta-error'
            }
            
            dispatch({
                type: ERR_PROJECT,
                payload: alert
            })
        }
    }

    return (
        <ProjectContext.Provider value={{
            projectsList: state.projectsList,
            form: state.form,
            errorform: state.errorform,
            project: state.project,
            message: state.message,
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