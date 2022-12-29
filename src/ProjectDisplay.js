import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import useFetch from "./useFetch";

// Displays singular project in full detail
const ProjectDisplay = () => {
    // Using useParams hook to get id of project that needs to be displayed
    const { id } = useParams();

    // Fetch data for single project using id
    const { data: project, loading, error } = useFetch("http://localhost:8000/projects/" + id)

    return (
        // Use conditional templating to show relevant content depending on state of fetch
        <div className="ProjectDisplay container">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn"><h5>Projects</h5></button>
            </div>
            {loading && <Loading />}
            {error && <Error error={error} />}
            {project && (
                <div>
                    <h1>{ project.title } - { project.date }</h1>
                    <p>{ project.body }</p>
                </div>
            )}
        </div>
    );
}
 
export default ProjectDisplay;