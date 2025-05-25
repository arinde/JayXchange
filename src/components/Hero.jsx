import Icon1 from "../assets/images/icon-1.svg"
import Icon2 from "../assets/images/icon-2.svg"
import Icon3 from "../assets/images/icon-3.svg"
import HeroImg from "../assets/images/heroImg.png"
import Company1 from "../assets/images/company-1.svg"
import Company2 from "../assets/images/company-2.svg"
import Company3 from "../assets/images/company-3.svg"
import Button from "./Button"
import { MoveUpRight } from 'lucide-react';
import { delay, motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut"
    },
  },
};

const lineAnim = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
};

const bottomIn = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.4
    },
  },
};

export default function Hero(){
    return(
        <section className=" md:mt-36 mt-28 relative z-10">
            <div className="flex md:flex-row flex-col justify-center  gap-x-2 items-center ">
                <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col items-start justify-center ml-9">

                    <motion.span variants={lineAnim} className="flex font-sans font-bold justify-start items-center sm:text-5xl text-3xl">EXCHANGE 
                      <motion.img initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", opacity: 100 }} src={Icon2} alt="" className="w-10 md:w-auto" />
                    </motion.span>

                    <motion.span variants={lineAnim} className="flex font-sans font-bold justify-start items-center sm:text-5xl text-3xl md:-mt-2 -mt-1">GIFTCARDS FOR 
                      <motion.img initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", opacity: 100 }} src={Icon1} alt="" className="w-10 md:w-auto"/>
                    </motion.span>

                    <motion.span variants={lineAnim} className="flex font-sans font-bold justify-start items-center sm:text-5xl text-3xl md:-mt-2 -mt-1">CRYPTO AND NAIRA 
                      <motion.img initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", opacity: 100 }} src={Icon3} alt="" className="w-10 md:w-auto"/>
                    </motion.span>

                    <motion.span variants={lineAnim} className="flex font-sans font-bold justify-start items-center sm:text-5xl text-3xl md:-mt-2 -mt-1">INSTANTLY</motion.span>
                    <motion.p variants={lineAnim} className="text-wrap text-gray-600 text-[16px]  font-sans my-2">Your unused gift cards? They're instant crypto. Exchange safely, swiftly, and effortlessly</motion.p>
                    <motion.div 
                    whileHover={{ scale: 1.05}} 
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    variants={lineAnim} className="flex justify-start -ml-5 -mt-2">
                        <Button
                        whatsapp 
                        phone="2348168500993" 
                        message="Hello, i am _______. What is the rate for apple gift card!" 
                        variant="primary" 
                        size="medium" 
                        className='mt-3 mx-5 w-fit flex items-center gap-x-1 shadow-xl'>Get Started <MoveUpRight className="w-4" /></Button>
                    </motion.div>
                    <div className="flex flex-col items-start md:mt-28 mt-8">
                        <motion.p variants={lineAnim} className="md:text-2xl text-lg font-serif text-gray-700">Trusted By</motion.p>
                        <div className=" flex justify-start gap-2">
                            <motion.img variants={lineAnim} src={Company1} alt="" className="w-16 sm:w-auto" />
                            <motion.img variants={lineAnim} src={Company2} alt="" className="w-16 sm:w-auto" />
                            <motion.img variants={lineAnim} src={Company3} alt="" className="w-16 sm:w-auto" />
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                variants={bottomIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={HeroImg} alt="" className="md:w-76 w-84 md:mt-24 mt-12 " />
                </motion.div>
            </div>
        </section>
    )
}