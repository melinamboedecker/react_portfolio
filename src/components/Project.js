import { ExternalLink } from 'react-external-link';

const Project = ({ projects }) => {

    return ( 
        <div className="centered">
            <div className="row">
            {projects.map((project) => (
                <div className="project regbox"   key={project.id}>
                    <ExternalLink href={project.deployed}><img className="image" src={project.image} alt='project'/></ExternalLink>
                    <div className="nameblock">
                    <h2 className="project-name">{ project.title }</h2>
                    <ExternalLink href={project.github}><i className="fa fa-github"></i></ExternalLink>
                    <p>{ project.tech }</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Project;