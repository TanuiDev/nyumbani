
import { FaArrowRightLong } from "react-icons/fa6";
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
        <div className="flex flex-wrap gap-4 mt-4"></div> 
    </div>
  )
}

export default Featured
