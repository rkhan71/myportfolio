import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Github, CaretLeftFill } from "react-bootstrap-icons";
import ProjectCarousel from "./ProjectCarousel";
import { Cloudinary } from "@cloudinary/url-gen";

// Displays singular project in full detail
const ProjectDisplay = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'dha5vtjog'}});
    const img1 = cld.image('placeholder1_ptxjuv');
    const img2 = cld.image('placeholder2_y3xwex');
    const img3 = cld.image('placeholder3_ukfyz9');

    const images = [
        {
         image: img1,
         caption:"Caption",
         description:"Description Here"
        },
        {
          image: img2,
          caption:"Caption",
          description:"Description Here"
        },
        {
          image: img3, 
          caption:"Caption",
          description:"Description Here"
        } 
    ]
    
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Project data sent to this page through state of link in ProjectList page
    const project = useLocation().state;

    return (
        // Show project
        <div className="ProjectDisplay container mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column heading">
                <h1>Rayan's Online Portfolio</h1>
                <div className="mt-4 fw-bold">{ project.title }</div>
            </div>
            {project && (
                <div className="container-fluid d-flex flex-column blur px-5 py-5">
                    <div className="row mb-3">
                        <div className="col fs-3">
                            <div className="fw-bold green-text">
                                { project.title }
                            </div>
                            <div>
                                { project.date }
                            </div>
                        </div>
                        <div className="col text-end">
                            <Link to="/projects"><button className="btn fw-bold mx-3"><CaretLeftFill /> Back</button></Link>
                            <a href={ project.link }><button className="btn fw-bold double-space"><Github />  Repo</button></a>
                        </div>
                    </div>
                    <div className="body mb-3">{ project.body }</div>
                    <ProjectCarousel images = { images } />
                </div>
            )}
        </div>
    );
}
 
export default ProjectDisplay;