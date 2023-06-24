import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import useFetch from "./useFetch";
import { Github, CaretLeftFill } from "react-bootstrap-icons";
import ProjectCarousel from "./ProjectCarousel";

// Displays singular project in full detail
const ProjectDisplay = () => {
    // Using useParams hook to get id of project that needs to be displayed
    const { id } = useParams();

    // Fetch data for single project using id
    const { data: project, loading, error } = useFetch("http://localhost:8080/projects/" + id)

    return (
        // Use conditional templating to show relevant content depending on state of fetch
        <div className="ProjectDisplay container mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="mt-4 fw-bold">{project ? project.title : "Projects"}</div>
            </div>
            {loading && <Loading />}
            {error && <Error error={error} />}
            {project && (
                <div className="container-fluid d-flex flex-column">
                    <div className="row mb-3">
                        <div className="col fs-3">
                            <div className="fw-bold red-color">
                                { project.title }
                            </div>
                            <div className="text-muted">
                                { project.date }
                            </div>
                        </div>
                        <div className="col text-end">
                            <Link to="/projects"><button className="btn fw-bold mx-3"><CaretLeftFill /> Back</button></Link>
                            <a href={ project.link }><button className="btn fw-bold double-space"><Github />  Repo</button></a>
                        </div>
                    </div>
                    <div className="body mb-3">{ project.body }</div>
                    <ProjectCarousel />
                </div>
            )}
        </div>
    );
}
 
export default ProjectDisplay;