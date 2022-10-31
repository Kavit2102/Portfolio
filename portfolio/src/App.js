import "./App.css";
import "./main.min.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Courses from "./components/courses";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const aboutColor = "#4a389b";
  const homeColor = "white";
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Navbar bg={aboutColor} />
        <Routes>
          <Route exact path="/" element={<Home iconColor={homeColor} />} />
          <Route
            exact
            path="/about"
            element={<About iconColor={aboutColor} />}
          />
          <Route exact path="/experience" element={<Courses />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer iconColor={homeColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
