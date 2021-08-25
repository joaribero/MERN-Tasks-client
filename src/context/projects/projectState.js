import React, { useReducer} from 'react';

import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {FORM_PROJECT} from '../../types';

const ProjectState = props => {

    const initialState = {
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

    return (
        <ProjectContext.Provider value={{
            form: state.form,
            showForm
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;