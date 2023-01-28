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
        
        <h4>Crosby Collective Recording Studios</h4>
        <h5>Client Services Manager 2019 - 2022</h5>
            <ul id="list"> 
                <li>Work closely with artists signed to 300 Entertainment, strategically match clients to employees to maximize productivity.</li>
                <li>Lead the staff in preparation for sessions, problem solve in a timely and effective manner.</li>
                <li>Manage 24/7 scheduling of 15-20 staff under short notice.</li> 
                <li>Track budgets of artist and company spending in Microsoft Excel. Track invoices and payment information.</li>
                <li>Manage session reports and credits for songs recorded, as well as scheduling sessions.</li>
        </ul>
        <h5>Client Services Coordinator 2018 - 2019</h5>
        <ul id="list">
            <li>Maintained cleanliness of studio as well as supplies. Execute tasks in a timely and accurate manner.</li>
        </ul>
        <h4>California Lutheran University</h4>
        <h5>Music Department Assistant
            2016 – 2017</h5>
            <ul id="list">
                <li>Scheduled use of school studio by students. </li>
                <li>Planned, managed, and coordinated the entertainment lineup for California Lutheran’s annual music festival, Callupalooza.</li>  
                <li>Managed auditions and curated the lineup.</li>
                <li>Performed the duty of stage manager. Ensured all eleven acts had the right equipment, went on stage at the right time and that the show ended by the 10pm curfew.</li>
            </ul>
    </motion.div>
    )
}

export default Experience