import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <Carousel/>
     <About/>
     <Services/>
     <Projects/>
     <Team/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
