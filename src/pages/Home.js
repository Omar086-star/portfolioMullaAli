import React from 'react';
import './Home.scss';
import '../components/StylesComponents.scss';
import Social from '../components/Social'
import NavBar from '../components/NavBar';
import Projects from '../components/Projects'; 
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';
export default function Home() {
  return (
    <div className='grand-Main'>
      <NavBar />
      <About/>
      <Projects /> 
      <Skills />
      <Contact />
      <Social/>
      <Footer />
    </div>
  );
}

