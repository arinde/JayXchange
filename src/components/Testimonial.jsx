export default function Testimonial (props) {
    return(
        <div className="min-w-[300px] md:min-w-[320px] border-0 rounded-lg group bg-white md:shadow-lg flex flex-col justify-start items-start px-4 py-4">
            <div className="rounded-bl-full bg-gray-200 group-hover:bg-blue-600 w-10 h-10">
                <p className="text-center text-3xl mt-2 group-hover:text-white transition duration-1000 text-gray-600">"</p>
            </div>
            
            <p className="text-wrap font-serif md:text-xl text-lg mt-4 font-medium">{props.text}</p>
            <p className="mt-9 font-sans md:text-xl text-lg font-medium">{props.name}</p>
            <p className="font-serif text-gray-700 font-medium md:text-[15px] text-sm">{props.job}</p>
        </div>
    )
}