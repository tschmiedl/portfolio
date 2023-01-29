import { AnimatePresence, motion } from "framer-motion"

const Background = (props) => {

    return(
    <AnimatePresence>
    <motion.img key={props.currentIndex} alt="" src={props.backgroundImages[props.currentIndex]} style={{zIndex: "-1", position:"absolute", width: "100vw", height: "100vh", cover: "cover"}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{default: {ease: [0.17, 0.67, 0.83, 0.67]}}}
      exit={{opacity: 0}}
      
      />
    </AnimatePresence>
    )
}

export default Background