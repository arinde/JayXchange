import MissionImg from "../assets/images/missionImage.png"
import MissionCloud from "../assets/images/missionCloud2.svg"
import VisionImg from "../assets/images/visionImage.png"
import VisionCloud from "../assets/images/visionCloud.png"
import { motion } from "framer-motion";

const fadeFromUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6,  ease: [0.42, 0, 0.58, 1] },
  },
};

const fadeFromDown = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6,  ease: [0.42, 0, 0.58, 1] },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6,  ease: [0.42, 0, 0.58, 1] },
  },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6,  ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Mission(){
    return(
        <section className="mb-16 mt-28">
            <div className="flex flex-col">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col-reverse md:justify-evenly justify-center items-center">
                    <motion.img variants={fadeFromLeft} src={MissionCloud} alt="" className="md:-mr-20 -mt-56 hidden md:block" />
                    
                    <div className="flex flex-col justify-start md:w-116 w-100 mt-4">
                        <motion.p variants={fadeFromUp} className="md:text-4xl text-3xl font-serif font-semibold">Mission Statement</motion.p>
                        <motion.p variants={fadeFromDown} className="text-wrap font-medium font-serif md:text-[18px] text-[16px] text-gray-600 mt-2">Our mission is to empower individuals worldwide by offering a seamless, 
                            secure, and instant platform dedicated to converting unused gift card value
                            into readily accessible cryptocurrency and instant cash in your local currency.
                            We aim to foster greater financial inclusion and facilitate effortless digital 
                            asset ownership for everyone, everywhere.
                        </motion.p>
                    </div>
                    <motion.img 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    variants={fadeFromRight} src={MissionImg} alt="" className="md:w-104 w-80" />
                </motion.div>
                <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center mt-16">
                    <motion.img 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    variants={fadeFromLeft} src={VisionImg} alt="" className="md:w-104 w-80" />
                    <div className="flex flex-col justify-start md:w-116 w-100 mt-4">
                        <motion.p variants={fadeFromUp} className="md:text-4xl text-3xl font-serif font-semibold">Vision Statement</motion.p>
                        <motion.p variants={fadeFromDown} className="text-wrap font-medium font-serif md:text-[18px] text-[16px] text-gray-600 mt-2">Our vision is to become the foremost global bridge, seamlessly connecting traditional 
                            forms of value with the dynamic digital economy. We envision a future where converting 
                            any gift card into versatile cryptocurrency is universally effortless, completely transparent, 
                            deeply trusted, and truly accessible to all.
                        </motion.p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}