import { motion } from "framer-motion"
import headshot from './assets/squareheadhsot.jpg'


const AboutMe = () => {

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
            <div className="row">
                
                    <img src={headshot} alt="" id="headshot"></img>
                
                    <p>Full Stack Developer with a background in Management and Customer Service. Enjoy solving complex coding challenges preferably within a team environment. Keen eye and enthusiasm for debugging code, testing code, and a strong desire to produce clean, well-written code. Able to quickly learn by referencing documentation and tutorials. Strong communication skills and ability to fulfill a specific vision for a project.</p>
                    <p>Thrive in results-driven environments. I enjoy working towards specific objectives and identifying ways to improve processes and increase efficiency. I have an astute sense of how my role can support and contribute to the overall success of the organization.</p>
                
            </div>
        </motion.div>
    )
}

export default AboutMe