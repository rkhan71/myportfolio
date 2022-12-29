import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import ProjectDisplay from "./ProjectDisplay";
import Projects from "./Projects";
import Resume from "./Resume";

// Setting up different pages of web application using React Router
function App() {  
  return (
    // Navbar and footer shown on every page, only one of the components between the Routes tag shown at a time
    // ProjectDisplay path has a route parameter "id" allowing the component to display only the relevant project
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/projects/:id" element={ <ProjectDisplay /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
