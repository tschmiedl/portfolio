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
        <h4>General Assembly</h4>

            <a href="https://generalassemb.ly/education/software-engineering-immersive" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.h4 whileHover={{scale:1.1}}>Software Engineering Immersive Remote</motion.h4></a>
            <h5>2022</h5>  
        <h4>California Lutheran University</h4>  
            <a href="https://www.callutheran.edu/academics/majors/music-production/" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.h4 whileHover={{scale:1.1}}>BA – Music Production</motion.h4></a>
            <h5>2013 – 2017</h5> 
        </motion.div>
    )
}

export default Education