import React,{Fragment,useState} from 'react';

const NewProject = () => {
    
    //state for project
    const [project, setProject] = useState({
        name: ''
    }); 

    //destructure object
    const {name} = project;

    //read input content
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    };

    const onSubmitProject = e => {
        e.preventDefault();

        //Validations

        //Add to the state

        //Reset form
    };

    return (  
        <Fragment>
            <button type="button"
                className=" btn btn-block btn-primario">
                New Project
            </button>
            <form onSubmit={onSubmitProject}
                className="formulario-nuevo-proyecto">
                <input type="text" 
                    className="input-text" 
                    placeholder="Project Name" 
                    name="name"
                    value= {name} 
                    onChange={onChangeProject}
                />
                
                <input type="submit" 
                    value="Add project" 
                    className="btn btn-primario btn-block"
                />
            </form>
        </Fragment>
        
    );
}
 
export default NewProject
