import { AnimatePresence, motion } from "framer-motion"

const Background = (props) => {

    return(
    <AnimatePresence>
    <motion.img key={props.currentIndex} alt="" src={props.backgroundImages[props.currentIndex]} className="stretch" 
    style={{
        zIndex: "-1", 
        position: "fixed", 
        width: "100vw", 
        height: "100vh", 
        display: "inline-block", 
        backgroundSize: "cover" 
    }}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{default: {ease: [0.17, 0.67, 0.83, 0.67]}}}
      exit={{opacity: 0}}
      
      />
    </AnimatePresence>
    )
}

export default Background