import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    // <div className="bg-[url('./assets/dark-space.jpg')] bg-cover bg-scroll">
    <div className="h-[100%] background-colour">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
