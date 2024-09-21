import { Link } from "react-router-dom";

// Display previews of projects as links to detailed displays of each project
const ProjectList = ({ projects }) => {
    return (
        // projects is an array of project objects
        // map function goes through this array and outputs relevant information from each project
        <div className="ProjectList container">
            {Object.keys(projects).map(project => (
                <Link to={`/projects/${ project }`}  key={ project } state={{
                    title: projects[project].title,
                    date: projects[project].date,
                    link: projects[project].link,
                    body: projects[project].body
                }}>
                    <div className="tile blur container-fluid d-flex flex-column px-3 py-3 mb-3">
                        <div className="row mb-3 fs-3">
                            <div className="green-text col fw-bold">
                                { projects[project].title }
                            </div>
                            <div className="col text-end">
                                { projects[project].date }
                            </div>
                        </div>
                        { projects[project].preview }
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default ProjectList;