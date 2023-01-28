



// Components
import Nav from './components/Nav';

// Pages
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Contact from './pages/Contact';
import Education from './pages/Education';
// Images
import bluegrey from './assets/bluegrey.jpeg'
import brownhorse from './assets/brownhorse.jpeg'
import greenboat from './assets/green.jpeg'
import greenboat2 from './assets/green2.jpeg'
import redboat from './assets/redboat.jpeg'

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';



function App() {
  const backgroundImages = [bluegrey, greenboat, greenboat2, redboat]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipe, setSwipe] = useState()
  
  const nextBG = () => {
    if (currentIndex < backgroundImages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    else {
      setCurrentIndex(0)
    }
  }


  return (
    <div className="App">
      <motion.img alt="" src={backgroundImages[currentIndex]} style={{zIndex: "-1", position:"absolute", width: "100vw", height: "100vh"}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      />
    <div className='row' id="name">
      
      <motion.h1 className='name'
      drag="x"
      dragConstraints={{left: 0, right: 0}}
      dragSnapToOrigin={true}
      onDragEnd={(event, info) => {
        setSwipe(info.point.x)
        if (swipe < info.point.x) {
            nextBG()
        }
        else {
            nextBG()
        }    
    }}
      >Tanner Schmiedl</motion.h1>
      
    </div>
    <Nav/>

    <Routes>
    <Route path="/" element={<AboutMe />} />
    <Route path="/experience" element={<Experience />} />

    <Route path="/education" element={<Education />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    
    
    
    
      
    </div>
  );
}

export default App;
