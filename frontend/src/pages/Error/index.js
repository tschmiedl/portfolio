import { motion } from "framer-motion"

const Error = () => {

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
            <p>Error! Nothing to see here!</p>
        </motion.div>
    )
}

export default Error