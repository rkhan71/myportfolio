import { useParams } from "react-router-dom";

const ProjectDisplay = () => {
    const { id } = useParams();

    return (
        <div className="ProjectDisplay container">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn"><h5>Projects</h5></button>
            </div>
            <p>{ id }</p>
        </div>
    );
}
 
export default ProjectDisplay;