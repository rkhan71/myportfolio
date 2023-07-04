import headshot from "./headshot.jpg";
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
                    <img src={ headshot } alt="headshot" className="img-fluid float-start me-3" width="240" height="240" />
                    <div className="mb-3">
                        My name is Rayan Khan, and this is my online portfolio. Explore the different pages of this website to learn more about me, my projects, and my experiences.
                    </div>
                    <div className="mb-3">
                        I am a candidate for the Bachelor of Science in Computer Science at the Georgia Institute of Technology. Although I initially applied to university as a Mechanical Engineering major, taking my first ever CS class in my second semester made me change my mind. I enjoyed the problem-solving process that went into every task I did in the class. It was also fascinating to learn a little bit about the inner workings of computers, which previously seemed like complete magic to me.
                    </div>
                    <div className="mb-3">
                        This spark of interest from my first CS class inspired me to learn more about the subject on my own. I started out with general online courses which developed my basic programming skills and showed me some of the applications of those skills. In conjunction with the courses, I applied what I was learning to various individual projects. Working on these projects allowed me to add more depth to the broad knowledge I gained from online courses. I developed practical skills and learned about widely used technologies that were specific to the areas my projects were in. The experience has also enhanced my general project management skills and taught me how to use technologies such as Git and Bash for version control, running projects, and much more. As I continued to learn more through college coursework and on my own, I was able to improve on my existing projects and start more advanced ones.
                    </div>
                    <div>
                        When I am not working on any coursework or projects, most of my time goes towards sport and music. I play Golf and Rugby on club teams at Georgia Tech. I am also a soccer fanatic and enjoy playing pick up games regularly. My passion for music started when I was in elementary school taking classical guitar and piano lessons. Although I do not take formal lessons anymore, I still enjoy playing both instruments from time to time to unwind. I have also recently picked up DJing as a hobby, which has been an enjoyable way to use all the musical knowledge I have gathered over the years.
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