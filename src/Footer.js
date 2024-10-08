import { Link } from "react-router-dom";
import { Linkedin, TelephoneFill, EnvelopeAtFill, Github } from "react-bootstrap-icons";

// Footer for web app
const Footer = () => {
    // Footer is a row with 3 columns each showing different information
    return (
        <div className="Footer container-fluid mt-auto">
            <div className="row h-100">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <img className="img-fluid w-50" src="https://online-portfolio-images.s3.us-east-2.amazonaws.com/public/logo.png" alt="logo"></img>
                    <p className="mt-3">Last Updated: 20th September 2024</p>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-bold">Site Map</p>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-bold">Contact Information</p>
                    <Link><EnvelopeAtFill /> rayan.ahkhan@gmail.com</Link>
                    <Link><TelephoneFill /> 678-997-0922</Link>
                    <a href="https://www.linkedin.com/in/khanrayan/" target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a>
                    <a href="https://github.com/rkhan71" target="_blank" rel="noopener noreferrer"><Github /> GitHub</a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;