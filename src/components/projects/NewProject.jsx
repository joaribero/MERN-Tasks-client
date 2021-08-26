import React,{Fragment,useContext,useState} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {
    
    //obtain form state
    const ProjectsContext = useContext(ProjectContext);
    const { form,errorform,showForm,addProject, showError } = ProjectsContext;

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
        if (name === '') {
            showError();
            return;
        }

        //Add to the state
        addProject(project)

        //Reset form
        setProject({
            name: ''
        })
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
            {errorform? <p className="mensaje error">The project name is required.</p> : null}
        </Fragment>
        
    );
}
 
export default NewProject
