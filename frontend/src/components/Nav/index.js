import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Nav = () => {
   
    return(
        <nav style={{zIndex: 0}}>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link to="/" >About Me</Link>

          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link to="/experience" >Experience</Link>
          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link to="/projects">Projects</Link>
          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link to="/education">Education</Link>
          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link to="/contact">Contact Me</Link>
          </motion.div>
          
        
      </nav>
    )
}

export default Nav