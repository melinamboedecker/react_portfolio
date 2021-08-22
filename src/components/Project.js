import { ExternalLink } from 'react-external-link';

const Project = ({ projects }) => {

    console.log(projects)

    return ( 
        <div>
            <div>
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    <ExternalLink href={project.deployed}><h4>{ project.title }</h4></ExternalLink>
                    <img src={project.image} alt='project'/>
                    <ExternalLink href={project.github}><i className="fa fa-github"></i></ExternalLink>
                    <p>{ project.tech }</p>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Project;