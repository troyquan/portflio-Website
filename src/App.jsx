import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Educations from "./components/Education";
import BackgroundPic from './assets/BG.jpg'



function App() {
  return (
    <div className="font-Poppins  " style={{ backgroundImage: `url(${BackgroundPic})` }}>
      <Navbar />
      <Home />
      <Skills />
      <Educations />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
