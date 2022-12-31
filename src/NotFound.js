import { Link, useNavigate } from "react-router-dom";
import { HouseFill, CaretLeftFill } from "react-bootstrap-icons";

// Page to display when user visits unrecognized route path
const NotFound = () => {
    // Using useNavigate hook to take user to their previous page when they click button
    const navigate = useNavigate();

    return (
        <div className="NotFound">
            <div className="d-flex flex-column align-items-center justify-content-center heading">
                <div className="d-flex flex-row mb-4">
                    <h1>Oops... Page Not Found</h1>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <Link to="/"><button className="btn mx-5 fw-bold double-space"><HouseFill />  Home</button></Link>
                    <button className="btn mx-5 fw-bold" onClick={() => navigate(-1)}><CaretLeftFill /> Back</button>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;