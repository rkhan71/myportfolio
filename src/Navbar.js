import { Link, useLocation } from "react-router-dom";

// Navbar with links to different pages of web app
const Navbar = () => {
    // Using useLocation hook to determine which page user is on so it can be displayed in navbar
    const location = useLocation();

    return (
        // Using a Bootstrap navbar that will collapse into a menu when screen is small
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg border-bottom border-5 border-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-5">
                                <Link className={"nav-link" + (location.pathname === "/" ? " active" : "")} to="/">Home</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className={"nav-link" + (location.pathname === "/projects" ? " active" : "")} to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className={"nav-link" + (location.pathname === "/resume" ? " active" : "")} to="/resume">Resume</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className={"nav-link" + (location.pathname === "/contact" ? " active" : "")} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;