import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

// Page where user can contact me through a form that sends me an email
const Contact = () => {
    // Using useState hook to update status of form
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Using Web3Forms API to get information from contact form to my email
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", null);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());
    
        if (res.success) {
            setLoading(false);
            setSent(true);
        } else {
            setLoading(false);
            setError("Something went wrong");
        }
    };

    return (
        // Conditional templates to display form, loading symbol when message is sending,
        // sent message when message is sent, and error template when error occurs
        <div className="Contact mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn mt-4 fw-bold">Contact</button>
            </div>
            {loading && <Loading />}
            {error && <Error error={ error } />}
            {!(sent) && !(loading) && !(error) && (
                <form className="form container" onSubmit={ handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Rayan" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn fw-bold">Submit</button>
                    </div>
                </form>
            )}
            {sent && (
                <div className="container text-center">
                    Message sent successfuly!
                </div>
            )}
        </div>
    );
}
 
export default Contact;