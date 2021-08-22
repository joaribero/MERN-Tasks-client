import React from 'react';
import Project from './Project.jsx';

const ListProjects = () => {
    
    const projectsList = [
        {name: 'Tienda virtual'},
        {name: 'Intranet'},
        {name: 'Diseño de sitio web'}
    ]
    
    return (  
        <ul className="listado-proyectos">
            {projectsList.forEach(project => {
                <Project project={project}/>
            })}
        </ul>
    );
}
 
export default ListProjects;