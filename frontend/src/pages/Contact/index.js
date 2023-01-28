import { motion } from "framer-motion"

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
            <h3>Email</h3> 
        </motion.div>
    )
}

export default Contact