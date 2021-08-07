import React,{Fragment} from 'react';

const NewProject = () => {
    return (  
        <Fragment>
            <button type="button"
                className=" btn btn-block btn-primario">
                New Project
            </button>
            <form action=""
                className="formulario-nuevo-proyecto">
                <input type="text" className="input-text" placeholder="Project Name" name="name" />
                <input type="submit" value="Add project" className="btn btn-primario btn-block"/>
            </form>
        </Fragment>
        
    );
}
 
export default NewProject
