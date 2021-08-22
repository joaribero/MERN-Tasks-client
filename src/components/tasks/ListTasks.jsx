import React,{Fragment} from 'react';
import Task from './Task.jsx'

const ListTasks = () => {
    
    const tareasProyecto = [
        {name: 'Elegir Plataforma', state: true},
        {name: 'Elegir Colores', state: false},
        {name: 'Elegir plataformas de pago', state: false},
        {name: 'Elegir Hosting', state: true},
    ]
    
    return (  
        <Fragment>
            <h2>Project: Tienda Virtual</h2>

            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0
                        ?(<li className="tarea">No tasks</li>)
                        : tareasProyecto.map(tarea => (
                        <Task
                         task={tarea}/> 
                    ))
                }
            </ul>

            <button type="button" className="btn btn-eliminar">Delete Project &times;</button>
        </Fragment>
        
    );
}
 
export default ListTasks;