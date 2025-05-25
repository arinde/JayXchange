import Background from "../components/background"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Solutions from "../components/Solutions"
import WhyUs from "../components/WhyUs"
import TestimonialData from "../assets/Data/TestimonialData"
import FAQsData from "../assets/Data/FAQsData"
import Testimonial from "../components/Testimonial"
import { useRef, useEffect, useState } from "react";
import FAQs from "../components/FAQs"
import Button from "../components/Button"
import { MoveUpRight } from 'lucide-react';
import OurNumbers from "../components/OurNumbers"
import Test from "../components/test"
import Mission from "../components/Mission"
import Socials from "../components/Socials"
import { motion } from "framer-motion"

export default function LandingPage() {
    const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

    const Testimonials = TestimonialData.map(testimonial => {
        return (<Testimonial 
                key={testimonial.id}
                text={testimonial.text}
                name={testimonial.name}
                job={testimonial.job} />)
    })

    const Faqs = FAQsData.map(FAQ=> {
      return (
        <FAQs 
        key={FAQ.id}
        question={FAQ.question}
        answer={FAQ.answer}
        test={FAQ.id} />
      )
    })

    const [bgLoaded, setBgLoaded] = useState(false);
    return(
        <>
        <Navbar /> 
        <div className="relative w-full overflow-hidden">
          <Background onLoadComplete={() => setBgLoaded(true)} />
          {bgLoaded && <div><Hero /></div>}
        </div>
        
        
        <Solutions />
        <WhyUs />
        <section id="Testimonial" className="bg-gray-100 py-6 mt-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-blue-600 text-[21px]">Testimonials</p>
                <p className="text-center text-gray-700 font-serif text-3xl md:text-4xl font-medium">What Our Customers Says</p>
                <div 
                ref={scrollRef}
                className="flex md:flex-row flex-col md:justify-around justify-center gap-4 py-8 px-5 cursor-grab md:overflow-x-hidden md:verflow-y-hidden md:whitespace-nowrap scrollbar-hide">
                    {Testimonials}
                </div>
                
            </div>
        </section>
        <section id="FAQ" className="my-10" >
          <div className="flex flex-col justify-center items-center gap-y-6 mt-24">
            <p  className="text-gray-800 font-serif text-5xl font-semibold">FAQ'S</p>
            <div className="gap-y-5">
              {Faqs}
            </div>
            <motion.div 
            whileHover={{ scale: 1.05}} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Button
            whatsapp 
            phone="2348168500993" 
            message="Hello, i am _______. i want to trade a gift card!" 
            variant="primary" 
            size="medium" 
            className='md:mt-3 mx-5  flex items-center gap-x-1 shadow-3xl'>Get Started <MoveUpRight className="w-4" /></Button>
            </motion.div>
          </div>
        </section>
        <OurNumbers />
        <Mission />
        <Socials />
        </>
    )
}