import { motion } from "framer-motion"

import linkedInIcon from './assets/iconmonstr-linkedin-3.svg'
import emailIcon from './assets/mail-142.svg'

const Contact = () => {


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
            <div className="contactLinks">
            <motion.a href="https://www.linkedin.com/in/tannerschmiedl/" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.img whileHover={{scale: 1.1}} src={linkedInIcon} alt="linkedInIcon" style={{width: "40px"}} draggable={false}/>
            </motion.a>
            <motion.a href="mailto:tschmiedl@me.com" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.img whileHover={{scale: 1.1}} src={emailIcon} alt="linkedInIcon" style={{width: "40px"}} draggable={false}/>
            </motion.a>
            </div>
        </motion.div>
    )
}

export default Contact