import Project from './Project';

const Portfolio = ({ projects }) => {
    return ( 
        <div>
            {/* <h3>Portfolio</h3> */}
            <Project projects={projects} />
        </div>
     );
}
 
export default Portfolio;