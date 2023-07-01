import { Link } from "react-router-dom";

// Display previews of projects as links to detailed displays of each project
const ProjectList = ({ projects }) => {
    return (
        // projects is an array of project objects
        // map function goes through this array and outputs relevant information from each project
        <div className="ProjectList container">
            {projects.map(project => (
                <Link to={`/projects/${ project.id }`}  key={ project.id } state={{
                    title: project.title,
                    date: project.date,
                    link: project.link,
                    body: project.body
                }}>
                    <div className="tile container-fluid d-flex flex-column px-3 py-3 mb-3">
                        <div className="row mb-3 fs-3">
                            <div className="green-text col fw-bold">
                                { project.title }
                            </div>
                            <div className="col text-end">
                                { project.date }
                            </div>
                        </div>
                        { project.preview }
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default ProjectList;