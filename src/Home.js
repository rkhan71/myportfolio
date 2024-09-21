import { FileEarmarkPdf } from "react-bootstrap-icons";

const Home = () => {
    return (
        <div className="Home">
            <div className="contianer-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="fw-bold mt-4">Home</div>
            </div>
            <div className="tint px-5 py-5">
                <div className="container px-5 py-5 ash-text">
                    <img src="https://online-portfolio-images.s3.us-east-2.amazonaws.com/public/headshot.jpg" alt="headshot" className="img-fluid float-start me-3" width="240" height="240" />
                    <div className="mb-3">
                        Hi, I’m Rayan Khan, a senior at the Georgia Institute of Technology studying Computer Science. I'm an aspiring software engineer with a passion for building impactful applications and exploring new technologies.
                    </div>
                    <div className="mb-3">
                        I'm currently working as a software engineer at Stratagem Research, an early stage startup that is building a platform to help high school and college students explore career paths. I am also a student researcher on the GROWER research team at Georgia Tech, where we collect and analyze power outage data from utilities companies across the U.S. with the goal of improving emergency response. Previously, I've had the privilege of working as a Software Engineering Intern at Google and The Travelers Companies. For more details on these experiences and other projects that I have worked on, please visit the projects page.
                    </div>
                    <div className="mb-3">
                        Through my work experiences, personal projects and college coursework I've developed a wide range of software engineering skills. I have experience with multiple full-stack development technologies including React.js, Angular, Express.js, Flask and more. I've worked with multiple SQL and NoSQL database management systems such as MySQL, PostgreSQL, and MongoDB. I have learned a great deal about Cloud Computing through hosting projects on AWS and Google Cloud Platform. Participating in hackathons and research projects has given me proficiency in data collection, data processing, and analysis using tools like Python, Selenium, pandas, numpy, JupyterNotebook and more.
                    </div>
                    <div className="mb-3">
                        More recently, I have been exploring the latest trends in AI and machine learning. I have prompt engineered, tuned, and tested large language models to integrate them into web applications and perform a variety of tasks. This ranges from writing and executing SQL queries from natural language questions for a large database maintained by my team at Google to collecting and processing medical triage information over a phone call for Emory Hospital. I'm gaining more traditional machine learning experience through college coursework in my Deep Learning class where I'm learning about machine learning from a theoretical perspective and starting a project to train a neural network with a more research-focused approach. 
                    </div>
                    <div>
                        Thank you for taking the time to learn more about me. I invite you to explore my projects to gain a deeper understanding of my work and abilities. Feel free to reach out and connect with me if you would like to collaborate or have any questions.
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="https://online-portfolio-images.s3.us-east-2.amazonaws.com/public/resume.pdf" target="_blank" rel="noopener noreferrer"><button className="btn fw-bold double-space mt-5"><FileEarmarkPdf />  My Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;