
import Feat2 from "../assets/images/feat2.png"
import Feat1 from "../assets/images/feat1.png"
import Feat3 from "../assets/images/feat3.png"
import Feat4 from "../assets/images/feat4.png"
import { motion } from "framer-motion"

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8,  ease: [0.42, 0, 0.58, 1] } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8,  ease: [0.42, 0, 0.58, 1] } },
};

export default function Solutions () {
    return(
        <section id="Solution" className="my-10">
            <div className="flex flex-col justify-center items-center gap-6">
                <motion.div 
                variants={slideFromLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col gap-8 items-center justify-center">
                    <div className="border-0 md:shadow-lg rounded-xl flex flex-col md:w-104 md:px-5 md:py-12 w-fit mx-5 justify-center items-start">
                        <p className="font-sans text-3xl font-semibold">Instant Value, Real-Time Rates</p>
                        <p className="text-wrap font-serif text-gray-700 md:text-[16px] mt-2">We provides lightning-fast conversions of your gift cards to crypto and naira. 
                            Our advanced system offers real-time, transparent exchange rates, 
                            ensuring you always get the best possible value for your assets, 
                            instantly deposited into your wallet or local account.
                        </p>
                    </div>
                    <div className="flex justify-center items-center mx-5">
                        <img src={Feat2} alt="" className="md:w-108 w-fit md:mt-1 " />
                    </div>
                </motion.div>
                
                <motion.div 
                variants={slideFromRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col-reverse gap-8 justify-center items-center mt-2">
                    <div className="flex justify-center items-center mx-5">
                        <img src={Feat1} alt="" className="md:w-108 w-fit" />
                    </div>
                    <div className="border-0 md:shadow-lg rounded-xl flex flex-col md:w-108 md:px-5 md:py-10 w-fit mx-5 justify-center items-start">
                        <p className="font-sans text-3xl font-semibold">Broad Spectrum of Supported Assets</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Jayxchange supports a wide array of popular gift card brands such as Apple, 
                            Amazon, Vanila, Razor Gold, Amex from major retailers worldwide, 
                            alongside a diverse selection of leading cryptocurrencies like Bitcoin, 
                            Ethereum, USDT, and more. Your unused gift card from virtually anywhere 
                            can now become valuable digital currency.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                variants={slideFromLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col gap-8 justify-center items-center mt-2">
                    <div className="border-0 md:shadow-lg rounded-xl flex flex-col md:w-108 md:px-5 md:py-12 w-fit mx-5 justify-center items-start">
                        <p className="font-sans text-3xl font-semibold">Unrivaled Security & Trust</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">We employs industry-leading security protocols, including advanced encryption, 
                            multi-factor authentication, and robust fraud prevention systems. We operate with full 
                            transparency, ensuring every transaction is secure, verifiable, 
                            and protected. Trade with confidence, knowing your assets are safe with us
                        </p>
                    </div>
                    <div className="flex justify-center items-center mx-5">
                        <img src={Feat3} alt="" className="md:w-108 w-fit  " />
                    </div>
                </motion.div>

                <motion.div 
                variants={slideFromRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col-reverse gap-8 justify-center items-center mt-2">
                    <div className="flex justify-center items-center mx-5">
                        <img src={Feat4} alt="" className="md:w-108 w-fit " />
                    </div>
                    <div className="border-0 md:shadow-lg rounded-xl flex flex-col md:w-108 w-fit mx-5 md:px-5 md:py-12 justify-center items-start">
                        <p className="font-sans text-3xl font-semibold">Dedicated 24/7 Customer Support</p>
                        <p className="text-wrap font-serif text-gray-700 text-[16px] mt-2">Questions? Concerns? Our friendly and knowledgeable support team is here for you around the clock. 
                            Whether you need assistance with a transaction, have a query about our services, 
                            or require technical help, Jayxchange's dedicated support is always just a click or call away, 
                            ensuring a smooth experience every time.
                        </p>
                    </div>
                </motion.div>
                
                
            </div>
        </section>
    )
}