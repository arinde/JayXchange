import Why1 from "../assets/images/why-1.png"
import Why2 from "../assets/images/why-2.png"
import Why3 from "../assets/images/why-3.png"
import Why4 from "../assets/images/why-4.png"
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5,  ease: [0.42, 0, 0.58, 1] },
  },
};

export default function WhyUs() {
    return(
        <section className="bg-gray-50 mt-6 py-6">
            <div className="flex flex-col justify-center items-center gap-6 md:mt-24 mt-10">
                <p className="text-gray-900 font-serif text-4xl font-medium">WHY US ?</p>
                <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row gap-6 mt-6">
                    <motion.div variants={item} className="flex flex-col border-0 shadow-lg rounded-xl md:w-108 w-fit mx-5 justify-center bg-white items-start px-6 py-4 ">
                        <p className="font-sans md:text-4xl text-3xl text-gray-900 font-semibold mt-2">Competitive Rates</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Enjoy favorable rates for your transactions, 
                            ensuring you get the most value out of your trades.</p>
                        <img src={Why1} alt="" className="w-92 mt-10" />
                    </motion.div>
                    <motion.div variants={item} className="flex flex-col border-0 shadow-lg rounded-xl md:w-108 w-fit mx-5  justify-center bg-white items-start px-6 py-4">
                        <p className="font-sans md:text-4xl text-3xl text-gray-900 font-semibold md:-mt-2 mt-2">Swift Payments</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Experience swift payment processing, allowing you to access your funds quickly 
                            and efficiently.</p>
                        <img src={Why2} alt="" className="w-92 mt-10" />
                    </motion.div>
                </motion.div>

                <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row gap-6">
                    <motion.div variants={item} className="flex flex-col border-0 shadow-lg rounded-xl md:w-108 w-fit mx-5 justify-center bg-white items-start px-6 py-4">
                        <p className="font-sans md:text-4xl text-3xl text-gray-900 font-semibold  mt-2">Outstanding Customer Support</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Benefit from exceptional customer service, receiving prompt assistance 
                            and support whenever you need it.</p>
                        <img src={Why3} alt="" className="w-92 mt-10" />
                    </motion.div>
                    <motion.div variants={item} className="flex flex-col border-0 shadow-lg rounded-xl md:w-108 w-fit mx-5 justify-center  bg-white items-start px-6 py-4">
                        <p className="font-sans md:text-4xl text-3xl font-semibold text-gray-900 md:-mt-3 mt-2">Transparency</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Trust in our transparent practices, ensuring clarity and honesty in 
                            every aspect of your trading experience.</p>
                        <img src={Why4} alt="" className="w-92 mt-10" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}