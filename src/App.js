import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/resume" element={ <Resume /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
