import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbars from './Components/Navbars'
import Services from './Components/Services';
function App() {
  return (
    <div>
    <Navbars/>
    <About/> 
    <Services/> 
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
