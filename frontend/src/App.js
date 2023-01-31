



// Components
import Nav from './components/Nav';
import Background from './components/Background';

// Pages
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Education from './pages/Education';
import Error from './pages/Error'

// Images
import bluegrey from './assets/bluegrey.jpeg'
import greenboat from './assets/green.jpeg'
import greenboat2 from './assets/green2.jpeg'
import redboat from './assets/redboat.jpeg'

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './pages/Projects';
import Footer from './components/Footer';



function App() {
  const backgroundImages = [bluegrey, greenboat, greenboat2, redboat]
  const [currentIndex, setCurrentIndex] = useState(0)

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  
  const nextBG = () => {
    if (currentIndex < backgroundImages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    else {
      setCurrentIndex(0)
    }
  }

  const prevBG = () => {
    if (currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
    }
    else {
      setCurrentIndex(backgroundImages.length - 1)
    }
  }


  return (
    <div className="App">
      <Background backgroundImages={backgroundImages} currentIndex={currentIndex} />
    <div className='row' id="name">
      
      <motion.h1 className='name'
      drag="x"
      dragConstraints={{left: 0, right: 0}}
      dragSnapToOrigin={true}
      onDragEnd={(event, {offset, velocity}) => {
        const swipe = swipePower(offset.x, velocity.x)
        
        if (swipe < -swipeConfidenceThreshold) {
            nextBG()
        }
        else if (swipe > swipeConfidenceThreshold) {
            prevBG()
        }    
    }}
      >Tanner Schmiedl</motion.h1>
      
    </div>
    <Nav/>
    <Routes>
    <Route path="/" element={<AboutMe />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/education" element={<Education />} />
    <Route path="/:id" element={<Error />} />
    </Routes>
    
    
    
    
    <Footer />
    </div>
  );
}

export default App;
