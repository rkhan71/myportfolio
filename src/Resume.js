import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Resume = () => {
    const { data, loading, error } = useFetch("https://my-json-server.typicode.com/rkhan71/data/education");

    return (
        <div className="Resume">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="fw-bold mt-4">Resume</div>
            </div>
            <div className="container mb-5">
                <div className="red-color fw-bold fs-3">
                    Education
                </div>
                {data && data.map(ed => (
                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col">{ ed.title }</div>
                            <div className="col text-end">{ ed.date }</div>
                        </div>
                        <ul>
                            { ed.body.map(bp => (
                                <li>{ bp }</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="container mb-5">
                <div className="red-color fw-bold fs-3">
                    Work Experience
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="container mb-5">
                <div className="red-color fw-bold fs-3">
                    Skills and Certifications
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="container mb-5">
                <div className="red-color fw-bold fs-3">
                    Projects
                </div>
                <div>I have completed multiple projects individually and as a part of my college coursework using a wide array of technologies. Details on these can be found on the <Link to="/projects">Projects Page</Link>.</div>
            </div>
            <div className="container mb-5">
                <div className="red-color fw-bold fs-3">
                    Leadership and Volunteering
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    );
}
 
export default Resume;