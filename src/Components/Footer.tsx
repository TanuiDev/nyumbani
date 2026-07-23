import { FaHome } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F1EC] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white p-2 rounded-md">
              <FaHome size={18} />
            </span>
            <h3 className="font-bold text-lg">
              Nyumbani <span className="text-orange-600">.</span>
            </h3>
          </div>
          <p className="text-gray-500 text-sm mt-3 max-w-[220px]">
            Helping people in Eldoret find honest, affordable places to call home.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-orange-600 cursor-pointer">All rentals</li>
            <li className="hover:text-orange-600 cursor-pointer">Saved list</li>
            <li className="hover:text-orange-600 cursor-pointer">Favourites</li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3">Popular areas</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-orange-600 cursor-pointer">Elgon View</li>
            <li className="hover:text-orange-600 cursor-pointer">Kimumu</li>
            <li className="hover:text-orange-600 cursor-pointer">Annex</li>
            <li className="hover:text-orange-600 cursor-pointer">Pioneer</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={12} />
              +254 700 000 000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope size={12} />
              hello@nyumbani.co.ke
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-500 text-sm">&copy; 2026 Nyumbani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;