const Project = ({ projects }) => {

    console.log(projects)

    return ( 
        <div>
            <div>
            {projects.map((project) => (
                <div className="project" key={project.id}>
                    <h4>{ project.title }</h4>
                    <p>{ project.image }</p>
                    <p>{ project.deployed }</p>
                    <p>{ project.github }</p>
                    <p>{ project.tech }</p>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Project;