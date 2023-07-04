import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { Send } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { HouseFill, CaretLeftFill } from "react-bootstrap-icons";

// Page where user can contact me through a form that sends me an email
const Contact = () => {
    // Using useNavigate hook to take user to their previous page when they click back button
    const navigate = useNavigate();

    // Using useState hook to update status of form
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Using Web3Forms API to get information from contact form to my email
    const handleSubmit = async (event) => {
        // Checking if form inputs are valid, if not form validation from Bootstrap is used
        if (!event.target.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            event.target.classList.add("was-validated");
            return;
        }
        setLoading(true);
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "29d903e4-26b6-4a37-a5e2-91b442f8f9ea");
    
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
        // Conditional templates to display either form, loading symbol when message is sending,
        // sent message when message is sent, or error template when error occurs
        <div className="Contact mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="fw-bold mt-4">Contact</div>
            </div>
            {loading && <Loading />}
            {error && <Error error={ error } />}
            {!(sent) && !(loading) && !(error) && (
                <div className="container blur px-5 py-5">
                    <div className="mb-3">
                        Feel free to use this form to contact me with any questions, comments, or concerns. Make sure to enter your name and email correctly so I can get back to you. If you would like to contact me more directly, please reach out through my email, phone number, LinkedIn, or GitHub which can all be found at the bottom of the page.
                    </div>
                    <form className="form needs-validation" onSubmit={ handleSubmit } noValidate>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label green-text fw-bold">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
                            <div className="invalid-feedback">
                                Please enter your name
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label green-text fw-bold">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required/>
                            <div className="invalid-feedback">
                                Please enter a valid email address
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label green-text fw-bold">Message</label>
                            <textarea className="form-control" id="message" name="message" placeholder="Hello!" required></textarea>
                            <div className="invalid-feedback">
                                Please enter a message
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn fw-bold double-space"><Send />  Send</button>
                        </div>
                    </form>
                </div>
            )}
            {sent && (
                <div className="Sent blur container px-5 py-5 d-flex justify-content-center align-items-center flex-column night-text">
                    <h3>Message sent successfuly!</h3>
                    <div className="d-flex flex-row justify-content-around mt-3">
                        <Link to="/"><button className="btn mx-5 fw-bold double-space"><HouseFill />  Home</button></Link>
                        <button className="btn mx-5 fw-bold" onClick={() => navigate(-1)}><CaretLeftFill /> Back</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Contact;