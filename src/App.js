import './App.css';
import React, { useEffect } from 'react';
import PresentationCard from './components/PresentationCard';
import UnderDevelopment from './components/UnderDevelopment';
import Description from './components/Description';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Contact from './components/Contact';
import Menu from './components/Menu';
function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
      mirror: true,
      once: false,
      placement: "top-center"
    });
  }, [])


  return (
    <div className="App">
      <UnderDevelopment />
      <Menu />
      <PresentationCard />
      <Description/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
