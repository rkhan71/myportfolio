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
                        Hi! My name is Rayan Khan. I am an aspiring Software Engineer, currently studying Computer Science at the Georgia Institute of Technology with an expected graduation date of December 2024. I am a driven and self-motivated individual who is always looking to learn new things and implement them.
                    </div>
                    <div className="mb-3">
                        My Software Engineering journey started when I took my first ever computer science course in college. I thoroughly enjoyed the problem solving process behind the assignments and projects I did. I was also fascinated to learn the basics of computers at a low level. Taking this course inspired me to switch my major from Mechanical Engineering to Computer Science and pursue a career in Software Engineering.
                    </div>
                    <div className="mb-3">
                        From there I began to extend my learning outside of college, teaching myself about new technologies through online courses. I was able to learn even more through implementing these new technologies in different personal projects. Creating web apps, games, and other applications with my self-taught skills motivated me to continue learning and creating even more.
                    </div>
                    <div className="mb-3">
                        With my experience so far from individual work, college, and internships, I have developed a great foundation in data structures and algorithms across multiple languages. I have also gained a lot of practical experience with web development using different frameworks and technologies. Additionally, working in teams of different sizes and makeups has given me great experience with planning and organizing software projects.
                    </div>
                    <div>
                        Thank you for taking the time to learn more about me. I invite you to explore my portfolio and projects to gain a deeper understanding of my work and abilities. If you have any inquiries or collaboration opportunities, I would love to hear from you. Let's connect and create something remarkable together!
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