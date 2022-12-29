import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
    return (
        <div className="ProjectList">
            {projects.map(project => (
                <div className="container-fluid" key={ project.id }>
                    <Link to={`/projects/${ project.id }`}>
                        <p className="pt-3">{ project.title }<p className="text-muted">{ project.date }</p></p>
                        <p className="pb-3">{ project.body }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectList;