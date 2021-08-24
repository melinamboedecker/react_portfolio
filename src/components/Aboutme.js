import './Aboutme.css';

const Aboutme = () => {
    return ( 
        <div className="photo-header">
            {/* <h3>About Me</h3> */}
            <div id="self-photo">
            <img src={'./assets/bioPhoto.jpg'} alt='bio'/>
            <p className="about-me-text">Full Stack Web Developer with a background in Analytical Chemistry, Microbiology. </p>
            </div>
        </div>
     );
}
 
export default Aboutme;