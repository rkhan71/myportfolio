import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Github, CaretLeftFill } from "react-bootstrap-icons";

// Displays singular project in full detail
const ProjectDisplay = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Project data sent to this page through state of link in ProjectList page
    const project = useLocation().state;

    return (
        // Show project
        <div className="ProjectDisplay container mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="mt-4 fw-bold">{ project.title }</div>
            </div>
            {project && (
                <div className="container-fluid d-flex flex-column blur px-5 py-5">
                    <div className="row mb-3">
                        <div className="col fs-3">
                            <div className="fw-bold green-text">
                                { project.title }
                            </div>
                            <div>
                                { project.date }
                            </div>
                        </div>
                        <div className="col text-end">
                            <Link to="/projects"><button className="btn fw-bold mx-3"><CaretLeftFill /> Back</button></Link>
                            <a href={ project.link } target="_blank" rel="noopener noreferrer"><button className="btn fw-bold double-space"><Github />  Repo</button></a>
                        </div>
                    </div>
                    <div className="body mb-3">{ project.body }</div>
                </div>
            )}
        </div>
    );
}
 
export default ProjectDisplay;