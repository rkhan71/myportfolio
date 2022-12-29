// Template to display error message
const Error = ({ error }) => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <h1>{ error }</h1>
        </div>
    );
}
 
export default Error;