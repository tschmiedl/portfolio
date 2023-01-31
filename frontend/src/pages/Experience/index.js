import { motion } from "framer-motion"


const Experience = () => {
    
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
        <a href="https://pdfhost.io/v/O4uygT8Z._Tanner_Resume_GA" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
        <motion.h4 whileHover={{scale: 1.1}}>Resume</motion.h4></a>
        <h4>General Assembly | Software Engineering Immersive Remote</h4>
        <h5>10/2022 - 1/2023</h5>
            <ul id="list"> 
                <li>Applied the fundamentals of software engineering, through lessons of HTML, CSS, Javascript, React & Python. </li>
                <li>Completed four projects and 480 hours of course material. </li>
                <li>Projects include the use of DOM Manipulation, HTML, CSS Frameworks, Express, MongoDB, Mongoose, Node.JS, React & Motion Framer.</li> 
        </ul>
        
        <h4>Studio Manager | Crosby Recording Studios</h4>
        <h5>10/2019 - 05/2022</h5>
            <ul id="list">
                <li>Managed scheduling of staff (15-20 staff members).</li>
                <li>Assisted in recording sessions with the head engineer. Built client relationships.</li>  
                <li>Maintained the studio environment and equipment.</li>
                <li>Managed session reports and credits for songs recorded.</li>
                <li>Worked closely with artists signed to 300 Entertainment, connected them to an engineer based on client needs and personality.</li>
            </ul>
    </motion.div>
    )
}

export default Experience