import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abort = new AbortController();
        fetch("http://localhost:8000/projects", { signal: abort.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Error fetching data.")
                }
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted.")
                } else {
                    setError(err.message);
                    setLoading(false);
                }
            })
            return () => abort.abort();
    }, [])
    return (
        <div className="Projects container">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn"><h5>Projects</h5></button>
            </div>
            {error && <div className="container-fluid d-flex justify-content-center align-items-center"><h1>{ error }</h1></div>}
            {loading && 
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {projects && <ProjectList projects={ projects } />}
        </div>
    );
}
 
export default Projects;