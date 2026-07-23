import { FaArrowRightLong } from "react-icons/fa6";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart, FaBookmark } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="p-4">
        <h2 className="sm:text-xl md:text-3xl font-bold">
            Featured Rentals 
        </h2>   
        <div className="flex justify-between items-center">
            <h3 className="sm:text-sm md:text-lg font-medium mt-0">
                Handpicked homes across Eldoret this week.
            </h3>
            <div className="flex items-center gap-2 cursor-pointer">
                <h3>View All</h3>
                <FaArrowRightLong />
            </div>
        </div>  

        <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[300px] md:w-[400px]">
                
                
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Modern House in Eldoret"
                        className="w-full h-56 object-cover"
                    />

                    
                    <span className="absolute top-3 left-3 bg-white text-sm font-medium px-3 py-1 rounded-full shadow">
                        Elgon View
                    </span>

                    
                    <span className="absolute top-3 right-24 bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
                        Featured
                    </span>

                   
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <button className="bg-white p-2 rounded-full shadow cursor-pointer">
                            <FaHeart className="text-gray-700" />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow cursor-pointer">
                            <FaBookmark className="text-gray-700" />
                        </button>
                    </div>
                </div>

             
                <div className="p-4">
                    <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-lg">Modern House in Eldoret</h4>
                        <div className="text-right">
                            <p className="text-orange-500 font-bold text-lg leading-tight">KSh 35,000</p>
                            <p className="text-gray-400 text-sm">/ month</p>
                        </div>
                    </div>

                    <p className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                        <FaMapMarkerAlt />
                        Off Elgon View Road
                    </p>

                    <div className="flex items-center gap-6 text-gray-600 text-sm mt-3">
                        <span className="flex items-center gap-1">
                            <FaBed /> 2
                        </span>
                        <span className="flex items-center gap-1">
                            <FaBath /> 2 bath
                        </span>
                        <span className="flex items-center gap-1">
                            <FaRulerCombined /> 85 m²
                        </span>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Featured