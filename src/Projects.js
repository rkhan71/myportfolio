import Loading from "./Loading";
import ProjectList from "./ProjectList";
import useFetch from "./useFetch";
import Error from "./Error";

// Fetching information about projects from database and displaying preview of each project
const Projects = () => {
    // Using useFetch custom hook to fetch data
    const { data: projects, loading, error } = useFetch("portfolioapi", "/projects");

    return (
        // Use conditional templating to show relevant content depending on state of fetch
        <div className="Projects mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="fw-bold mt-4">Projects</div>
            </div>
            {error && <Error error={ error } />}
            {loading && <Loading />}
            {projects && <ProjectList projects={ projects.projects } />}
        </div>
    );
}
 
export default Projects;