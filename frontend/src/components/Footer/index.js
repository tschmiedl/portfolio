import { motion } from "framer-motion"

import linkedInIcon from './assets/iconmonstr-linkedin-3.svg'
import emailIcon from './assets/mail-142.svg'
import gitHubIcon from './assets/iconmonstr-github-1.svg'


const Footer = () => {
   
    return(
        <footer style={{zIndex: 0}}>
          <motion.div>
            <div className="contactLinks">
            <motion.a href="https://www.linkedin.com/in/tannerschmiedl/" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.img whileHover={{scale: 1.1}} src={linkedInIcon} alt="linkedInIcon" style={{width: "40px"}} draggable={false}/>
            </motion.a>
            <motion.a href="mailto:tschmiedl@me.com" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.img whileHover={{scale: 1.1}} src={emailIcon} alt="linkedInIcon" style={{width: "40px"}} draggable={false}/>
            </motion.a>
            <motion.a href="https://github.com/tschmiedl" target="_blank" rel="noopener noreferrer" className="a-outclick" draggable={false}>
                <motion.img whileHover={{scale: 1.1}} src={gitHubIcon} alt="linkedInIcon" style={{width: "40px"}} draggable={false}/>
            </motion.a>
            </div>
              

          </motion.div>
          
          
        
      </footer>
    )
}

export default Footer