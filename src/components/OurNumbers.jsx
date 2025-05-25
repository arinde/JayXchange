import { useState } from "react"
import NumbersIcon1 from "../assets/images/numbers-icon-1.png"
import NumbersIcon2 from "../assets/images/numbers-icon-2.png"
import NumbersIcon3 from "../assets/images/numbers-icon-3.png"
import Counter from "./Counter"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // smooth cubic-bezier easing
    },
  },
};

export default function OurNumbers(){
    return(
        <section className="bg-gray-100 my-14 pt-5 pb-20">
            <div className="flex flex-col justify-center items-center gap-5 mt-14">
                <div className="border-0 rounded-4xl md:p-4 p-3 bg-black">
                    <p className="text-white font-sans md:text-2xl text-xl font-semibold ">Check Out Our Numbers</p>
                </div>
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-y-5 gap-x-7">
                    <motion.div variants={itemVariants} className="flex justify-between items-center bg-gray-50 rounded-2xl md:w-84 w-88 md:h-68 h-60 pl-4">
                        <div className=" flex flex-col md:gap-y-8 gap-y-4 ml-6">
                            <div className="text-gray-800 font-serif md:text-5xl text-4xl font-semibold"><Counter target={5} duration={1000} /></div>
                            <p className="text-blue-500 font-medium md:text-xl text-lg">Ratings</p>
                        </div>
                        <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={NumbersIcon3} alt="" className="md:w-48 w-40 ml-2" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex justify-between items-center bg-gray-50 rounded-2xl md:w-84 w-88 md:h-68 h-60">
                        <div className="flex flex-col md:gap-y-8 gap-y-4 ml-5 ">
                            <div className="text-gray-800 font-serif md:text-5xl text-4xl font-semibold flex">$<Counter target={50} duration={1000} />M+</div>
                            <p className="text-blue-500 font-medium md:text-xl text-lg">In Transaction</p>
                        </div>
                        <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={NumbersIcon2} alt="" className="md:w-40 w-36 -ml-5" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex justify-between items-center bg-gray-50 rounded-2xl md:w-84  w-88 md:h-68 h-60">
                        <div className="flex flex-col md:gap-y-8 gap-y-4 ml-5">
                            <div className="text-gray-800 font-serif md:text-5xl text-4xl font-semibold flex"><Counter target={90} duration={1000} />%</div>
                            <p className="text-blue-500 font-medium md:text-xl text-lg">Success Rate</p>
                        </div>
                        <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={NumbersIcon1} alt="" className="md:w-44 w-40 " />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}