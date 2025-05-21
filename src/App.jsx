
import Header from './components/header.jsx';
import { Navbar } from './components/Navbar.jsx';
import Gullar from './components/Gullar';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer.jsx';

// import Servic from './components/Servic.jsx'; 
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Gullar />
      <About />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

