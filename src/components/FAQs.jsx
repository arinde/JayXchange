import { useState } from "react"
import { Plus, Minus } from "lucide-react";

export default function FAQs(props) {
    const [open, setOpen]=useState(false)
    const [activeFaq, setActiveFaq] = useState(null)

    return(
        <div className="mt-4 cursor-pointer mx-3">
            <div 
            className="flex justify-between items-center border-0 shadow-md rounded-xl bg-gray-50
             hover:bg-gray-100 px-4 py-5  md:w-164 w-full  " onClick={() => setOpen(!open)}>
                <p className="font-serif text-gray-800 md:text-[15px] text-[13px] tracking-wide font-semibold">{props.question}</p>
                <button
                    onClick={() => setOpen(!open)} className="text-left font-medium text-blue-600 text-2xl">
                    {open ? <Minus size={20} /> : <Plus size={20} />}
                </button>

            </div>
            
            {open &&
             <div className="border-0 shadow-sm rounded-xl bg-gray-50
             hover:bg-gray-100 px-4 py-5  md:w-164 w-full mt-3">
                <p className="text-gray-700 transition-all duration-200 text-wrap font-sans text-[14px] font-medium">{props.answer}</p>
            </div>
             }
        </div>
    )
}

