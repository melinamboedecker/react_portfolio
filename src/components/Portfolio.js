import Project from './Project';

const Portfolio = ({ projects }) => {
    return ( 
        <div>
            <h1>Portfolio</h1>
            <Project projects={projects} />
        </div>
     );
}
 
export default Portfolio;