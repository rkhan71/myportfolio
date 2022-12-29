import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Oops... Page Not Found</h1>
                <Link to="/"><button className="btn"><h5>Go Back Home</h5></button></Link>
            </div>
        </div>
    );
}
 
export default NotFound;