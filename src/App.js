import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header'
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
        duration: 1000,
      }
    );
  }, [])
  return (
    <div className=' overflow-hidden '>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
