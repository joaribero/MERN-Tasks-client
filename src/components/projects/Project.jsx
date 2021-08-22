import React from 'react';

const Project = ({project}) => {
    
    console.log(project);

    return (  
        <li>
            <button
            type="button"
            className="btn btn-blank">
                {project.name}
            </button>
        </li>
    );
}
 
export default Project;