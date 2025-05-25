import Bitcoin from "../assets/images/footer1.svg"
import Euros from "../assets/images/footer2.svg"
import Pounds from "../assets/images/footer3.svg"
import Naira from "../assets/images/footer4.svg"
import { Instagram, MessageCircleMore, Mail } from "lucide-react"
import { motion } from "framer-motion"
export default function Socials(){
    const email = "arindevictor8@gmail.com";
    const phone = "2348168500993";
    const message = "Hello, i am _______. i want to trade a gift card!";
    return(
            
        
            <div id="Blog" className="relative bg-[#0B0C12] text-white rounded-t-[40px] overflow-hidden h-[500px] ">
            
                {/* Floating Coins */}
                <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={Bitcoin} className="absolute top-4 md:left-10 -left-8 md:w-52 w-40 " />
                <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={Euros} className="absolute md:bottom-4 bottom-0 md:left-0 md:w-56 w-28 z-20" />
                <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={Pounds} className="absolute md:top-4 top-24 md:right-12 -right-12 md:w-56 w-40 " />
                <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} src={Naira} className="absolute bottom-0 md:right-4 -right-3 md:w-68 w-36 z-20" />

                {/* Social Icons */}
                <div className="flex md:flex-row flex-col justify-center md:gap-16 gap-3 py-10 z-10 relative mt-16">
                    <motion.div 
                    whileHover={{ scale: 1.05}} 
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer">
                        <Instagram className="md:w-6 md:h-6 w-5 md:mb-1" />
                        <span className="md:text-[22px] text-lg font-serif font-semibold">Instagram</span>
                    </motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.05}} 
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer">
                        <MessageCircleMore className="md:w-6 md:h-6 w-5 md:mb-1" />
                        <a  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="md:text-[22px] text-lg font-serif font-semibold cursor-pointer">Whatsapp</a>
                    </motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.05}} 
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center">
                        <Mail className="md:w-6 md:h-6 w-5 md:mb-1" />
                        <a href={`mailto:${email}`} className="md:text-[22px] text-lg font-serif font-semibold cursor-pointer">Mail</a>
                    </motion.div>
                </div>

                
                <div className="absolute md:bottom-0 bottom-12 z-10 md:left-40  md:-mt-8 md:text-[135px] text-8xl font-bold text-[#2E3443] leading-none tracking-tighter">
                    <span className="md:text-[220px] font-serif md:-mr-8">J</span>AYXCHANGE
                </div>

                <p className="m-3 text-gray-400 md:mt-68 mt-40 text-center md:text-[13px] text-[11px] tracking-wide font-bold">&copy; {new Date().getFullYear()} Arinde Victor. Inspiration for this work was gotten from brindeng.com</p>
            </div>

        
    )
}

