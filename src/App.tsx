import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutDetails from './components/AboutDetails';
import AllProjects from './components/AllProjects';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-custom-black">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
          </div>
        }
      />

      <Route
        path="/about-details"
        element={
          <div className="min-h-screen bg-custom-black">
            <Navigation />
            <AboutDetails />
            <Footer />
          </div>
        }
      />

      <Route
        path="/all-projects"
        element={
          <div className="min-h-screen bg-custom-black">
            <Navigation />
            <AllProjects />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;


