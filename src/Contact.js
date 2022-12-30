import { useState } from "react";

// Page where user can contact me through a form that sends me an email
const Contact = () => {
    // Using useState hook to track users' form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="Contact mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <button className="btn mt-4 fw-bold">Contact</button>
            </div>
            <div className="form container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Rayan" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn fw-bold">Submit</button>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;