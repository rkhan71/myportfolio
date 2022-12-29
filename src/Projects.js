import Loading from "./Loading";
import ProjectList from "./ProjectList";
import useFetch from "./useFetch";

// Fetching information about projects from database and displaying preview of each project
const Projects = () => {
    // Using useFetch custom hook to fetch data
    const { data: projects, loading, error } = useFetch("http://localhost:8000/projects");
    
    return (
        // Use conditional templating to show relevant content depending on state of fetch
        <div className="Projects container">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn"><h5>Projects</h5></button>
            </div>
            {error && <div className="container-fluid d-flex justify-content-center align-items-center"><h1>{ error }</h1></div>}
            {loading && <Loading />}
            {projects && <ProjectList projects={ projects } />}
        </div>
    );
}
 
export default Projects;