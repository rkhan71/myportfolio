import { Link } from "react-router-dom";

// Display previews of projects as links to detailed displays of each project
const ProjectList = ({ projects }) => {
    return (
        // projects is an array of project objects
        // map function goes through this array and outputs relevant information from each project
        <div className="ProjectList container mb-5">
            {projects.map(project => (
                <div className="container-fluid" key={ project.id }>
                    <Link to={`/projects/${ project.id }`}>
                        <p className="pt-3">{ project.title }</p>
                        <p className="text-muted">{ project.date }</p>
                        <p className="pb-3">{ project.body }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectList;