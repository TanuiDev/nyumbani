import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";


const Ctacards = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 gap-6 mt-10 sm:gap-8">
      <div className="flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md  ">
        <div>
          <RiVerifiedBadgeFill className="text-4xl text-orange-500" />
        </div>

        <h2 className="text-2xl font-bold">
          Verified Listings
        </h2>
        <p className="text-lg font-medium text-center">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>   
      <div className="flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md">
        <div>
          <IoWalletOutline className="text-4xl text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold">
          Transparent Pricing
        </h2>
        <p className="text-lg font-medium text-center">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>  
      <div className="flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md">
        <div>
          <IoLocationOutline className="text-4xl text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold">
          Local to Eldoret
        </h2>
        <p className="text-lg font-medium text-center">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>     
    </div>
  )
}

export default Ctacards

