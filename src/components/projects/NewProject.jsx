import React,{Fragment,useContext,useState} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {
    
    //obtain form state
    const ProjectsContext = useContext(ProjectContext);
    const { form,showForm } = ProjectsContext;

    console.log('El valor de form es: ' + form);

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

    //show form
    const onClickForm = () => {
        showForm();
    }

    return (  
        <Fragment>
            <button type="button"
                className=" btn btn-block btn-primario"
                onClick={onClickForm}>
                New Project
            </button>
            {
                form 
                ? ( <form onSubmit={onSubmitProject}
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
                    </form>)
                : null
            }
        </Fragment>
        
    );
}
 
export default NewProject
