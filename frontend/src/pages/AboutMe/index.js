import { motion } from "framer-motion"



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
            
            <p>Full Stack Developer with a background in Management and Customer Service. I use my background in Management to work with others on thoroughly solving complex problems as a team and my experience in Customer Service to develop user friendly applications that will enhance their experience. </p>
            <p>Thrive in results-driven environments. I enjoy working towards specific objectives and identifying ways to improve processes and increase efficiency. I have a keen sense of how my role can support and contribute to the overall success of the organization.</p>
        </motion.div>
    )
}

export default AboutMe