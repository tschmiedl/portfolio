import { motion } from "framer-motion"

const Education = () => {

    return(
        <motion.div 
        className="section"
        initial={{
            opacity:0,
            y: "100%"
        }}
        animate={{
            opacity: 1,
            y: "0%"
        }}
        exit={{opacity:0}}
        >
        <h4>California Lutheran University</h4>  
            <a href="https://www.callutheran.edu/academics/majors/music-production/" target="_blank" rel="noopener noreferrer">BA – Music Production</a>
            <h6>2013 – 2017</h6>
        <h4>General Assembly</h4> 
            <a href="https://generalassemb.ly/education/software-engineering-immersive" target="_blank" rel="noopener noreferrer">Software Engineering Immersive Remote</a>
            <h6>2022</h6>   
        </motion.div>
    )
}

export default Education