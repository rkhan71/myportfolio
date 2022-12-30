import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Linkedin, TelephoneFill, EnvelopeAtFill, Github, CCircle } from "react-bootstrap-icons";

// Footer for web app
const Footer = () => {
    // Footer is a row with 3 columns each showing different information
    return (
        <div className="Footer container-fluid border-top border-5 border-dark mt-auto blue">
            <div className="row h-100">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <img className="img-fluid w-50" src={logo} alt="logo"></img>
                    <p className="mt-3">Last Updated: 1st January 2023</p>
                    <p>Copyright <CCircle /> 2023</p>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-bold">Site Map</p>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-bold">Contact Information</p>
                    <Link to="#"><EnvelopeAtFill /> rayan.ahkhan@gmail.com</Link>
                    <Link to="#"><TelephoneFill /> 678-997-0922</Link>
                    <a href="https://www.linkedin.com/in/khanrayan/"><Linkedin /> LinkedIn</a>
                    <a href="https://github.com/rkhan71"><Github /> GitHub</a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;