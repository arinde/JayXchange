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
        <div className="md:flex justify-center">
            <motion.img 
            variants={fadeInFromLeft}
            initial="hidden"
            animate="show"
            onLoad={handleImageLoad}
            src={Herotop} alt="" className="md:-mt-84" />

            <motion.img 
            variants={fadeInFromLeft}
            initial="hidden"
            animate="show"
            onLoad={handleImageLoad}
            src={Heroright} alt="" className="md:-ml-100" />
        </div>
    )
}