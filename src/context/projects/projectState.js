import React, { useReducer, useState } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        form: false
    }

    //dispatch to execute actions
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //series of functions for CRUD

    return (
        <projectContext.Provider value={{
            new: state.form
        }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;