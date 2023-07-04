import { ArrowClockwise } from "react-bootstrap-icons";

// Template to display error message
const Error = ({ error }) => {
    return (
        // Error message with button to refresh page
        <div className="Error blur container px-5 py-5 d-flex justify-content-center align-items-center flex-column night-text">
            <h3>{ error }</h3>
            <button className="btn fw-bold mt-3 double-space" onClick={() => window.location.reload(false)}><ArrowClockwise />  Refresh</button>
        </div>
    );
}
 
export default Error;