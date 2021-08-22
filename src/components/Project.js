const Project = ({ projects }) => {

    console.log(projects)

    return ( 
        <div>
            <div>
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    <a href={project.deployed}><h4>{ project.title }</h4></a>
                    <p>{ project.image }</p>
                    <a href={project.github}><i className="fa fa-github"></i></a>
                    <p>{ project.tech }</p>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Project;