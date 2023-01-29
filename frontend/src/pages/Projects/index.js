import { motion } from "framer-motion"
import { useState } from "react"

import quizMeGif from './assets/quizme.gif'
import quizMePic from './assets/quizme.jpeg'
import recommendMePic from './assets/recommendme.jpeg'

const Projects = () => {
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const [currentIndex, setCurrentIndex] = useState(0)
    const myProjects = [
        {
        title: "Quiz Me",
        image: quizMeGif,
        description: "Quiz Me is a full-stack MERN application built using a MongoDB database, Express backend and a React frontend. The application allows users to sign up or login and create groups of flash cards for studying purposes. My approach for this project was to build a useful app that showcases my ability to create dry, clean and effective code. ",
        url: "https://ts-quizme.herokuapp.com/",
        github: "https://github.com/tschmiedl/QuizMe"
        },
        {
        title: "Recommend Me",
        image: recommendMePic,
        description: "RecommendMe is a full-stack MEN application built using MongoDB, Express, and EJS. The application allows users to view music and movies and add a recommendation to the database. The goal of this project was to create an user-friendly interface and for me to implement full CRUD while understanding the file structure and design of express/EJS.",
        url: "https://ts-recommend-me.herokuapp.com/",
        github: "https://github.com/tschmiedl/recommendme"
        }
        ]

    const nextProj = () => {
        if (currentIndex < myProjects.length - 1) {
        setCurrentIndex(currentIndex + 1)
        }
        else {
        setCurrentIndex(0)
        }
    }

    const prevProj = () => {
        if (currentIndex > 0){
          setCurrentIndex(currentIndex - 1)
        }
        else {
          setCurrentIndex(myProjects.length - 1)
        }
      }

    return(
        <motion.div 
        className="section"
        initial={{
            opacity:0,
            y: "10%"
        }}
        animate={{
            opacity: 1,
            y: "0%"
        }}
        exit={{opacity:0}}
        >
        
        <motion.div
        className="projectInfo"
        drag="x"
        dragConstraints={{left: 0, right: 0}}
        dragSnapToOrigin={true}
        onDragEnd={(event, {offset, velocity}) => {
          const swipe = swipePower(offset.x, velocity.x)
          
          if (swipe < -swipeConfidenceThreshold) {
              nextProj()
          }
          else if (swipe > swipeConfidenceThreshold) {
              prevProj()
          }    
      }}
        >
            <div className="projBtns">
            <motion.button onClick={() => {setCurrentIndex(0)}} className="projBtn" whileHover={{ scale: 1.1 }}
            >Quiz Me</motion.button>
            <motion.button onClick={() => {setCurrentIndex(1)}} className="projBtn" whileHover={{ scale: 1.1 }}>Recommend Me</motion.button>
            </div>
            
                    <img src={myProjects[currentIndex].image} style={{width: "80%"}} alt="" className="mx-auto" draggable={false} />
                    <p>{myProjects[currentIndex].description}</p>
                    <motion.a href={myProjects[currentIndex].url} target="_blank" rel="noopener noreferrer" className="a-outclick" whileHover={{ scale: 1.1 }}>Visit {myProjects[currentIndex].title}</motion.a>
                    <motion.a href={myProjects[currentIndex].github} target="_blank" rel="noopener noreferrer" className="a-outclick" whileHover={{ scale: 1.1 }}>GitHub</motion.a>
               
        </motion.div>
        
        </motion.div>
    )
}

export default Projects