import Herotop from "../assets/images/heroTop.svg"
import Heroright from "../assets/images/heroRight.svg"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Background ({ onLoadComplete }) {
    const [loadedImages, setLoadedImages] = useState(0);

            const handleImageLoad = () => {
            setLoadedImages((prev) => prev + 1);
        };

        // Call onLoadComplete only when both images are loaded
        useEffect(() => {
            if (loadedImages === 2) {
            onLoadComplete();
            }
        }, [loadedImages, onLoadComplete]);

        const fadeInFromLeft = {
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
        };

        const fadeInFromRight = {
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
        };
    return(
        <div className="top-0 left-0  w-full z-0 absolute">
            <motion.img 
            variants={fadeInFromLeft}
            initial="hidden"
            animate="show"
            onLoad={handleImageLoad}
            src={Herotop} alt="" className=" w-full h-full object-cover" />

            <motion.img 
            variants={fadeInFromLeft}
            initial="hidden"
            animate="show"
            onLoad={handleImageLoad}
            src={Heroright} alt="" className=" absolute top-0 left-0 w-full h-full object-contain" />
        </div>
    )
}