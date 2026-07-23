import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoWalletOutline, IoLocationOutline } from "react-icons/io5";

const Ctacards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F5F1EC] py-10 w-full px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col items-center justify-center gap-3 bg-white p-8 rounded-2xl shadow-md text-center">
        <RiVerifiedBadgeFill className="text-4xl text-orange-500" />
        <h2 className="text-xl sm:text-2xl font-bold">
          Verified Listings
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 bg-white p-8 rounded-2xl shadow-md text-center">
        <IoWalletOutline className="text-4xl text-orange-500" />
        <h2 className="text-xl sm:text-2xl font-bold">
          Transparent Pricing
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 bg-white p-8 rounded-2xl shadow-md text-center">
        <IoLocationOutline className="text-4xl text-orange-500" />
        <h2 className="text-xl sm:text-2xl font-bold">
          Local to Eldoret
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Every rental is reviewed. No ghost houses, no repeat photos.
        </p>
      </div>

    </div>
  )
}

export default Ctacards