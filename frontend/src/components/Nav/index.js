import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Nav = (props) => {
   
    return(
        <nav style={{zIndex: 0}}>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link onClick={() => {props.setCurrentPage(0)}} >About Me</Link>

          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link onClick={() => {props.setCurrentPage(1)}} >Experience</Link>
          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link onClick={() => {props.setCurrentPage(2)}}>Projects</Link>
          </motion.div>
          <motion.div 
            whileHover={{scale: 1.1,
            transition: {duration: .3},
            }}
            whileTap={{ scale: 0.9 }}>

              <Link onClick={() => {props.setCurrentPage(3)}}>Education</Link>
          </motion.div>
          
        
      </nav>
    )
}

export default Nav