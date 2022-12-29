import { Link, useNavigate } from "react-router-dom";

// Page to display when user visits unrecognized route path
const NotFound = () => {
    // Using useNavigate hook to take user to their previous page when they click button
    const navigate = useNavigate();

    return (
        <div className="NotFound">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Oops... Page Not Found</h1>
                <Link to="/"><button className="btn"><h5>Go Home</h5></button></Link>
                <button className="btn" onClick={() => navigate(-1)}><h5>Go Back</h5></button>
            </div>
        </div>
    );
}
 
export default NotFound;