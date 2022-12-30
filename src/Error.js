// Template to display error message
const Error = ({ error }) => {
    return (
        // Error message with button to refresh page
        <div className="Error container-fluid d-flex justify-content-center align-items-center flex-column">
            <h3>{ error }</h3>
            <button className="btn fw-bold mt-3" onClick={() => window.location.reload(false)}>Refresh Page</button>
        </div>
    );
}
 
export default Error;