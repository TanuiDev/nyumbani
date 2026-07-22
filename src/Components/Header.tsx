import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative flex items-center justify-between p-4 text-white h-24 bg-black">
      
      <div>
        <Link to="/" className="text-sm md:text-xl font-bold">Logo</Link>
      </div>

      
      <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
        <Link to="/" className="text-sm md:text-lg">Home</Link>
        <Link to="/favorites" className="text-sm md:text-lg">Favorites</Link>
        <Link to="/save" className="text-sm md:text-lg">Save</Link>
      </div>

      
      <div className="hidden md:flex gap-4">
        <Link to="/login" className="text-sm md:text-lg">Login</Link>
        <Link to="/register" className="text-sm md:text-lg">Register</Link>
      </div>

      
      <button
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        className="md:hidden text-white text-2xl hover:text-gray-400 transition duration-300"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 z-50">
          <Link to="/" className="text-lg" onClick={handleMenuToggle}>Home</Link>
          <Link to="/favorites" className="text-lg" onClick={handleMenuToggle}>Favorites</Link>
          <Link to="/save" className="text-lg" onClick={handleMenuToggle}>Save</Link>
          <Link to="/login" className="text-lg" onClick={handleMenuToggle}>Login</Link>
          <Link to="/register" className="text-lg" onClick={handleMenuToggle}>Register</Link>
        </div>
      )}
    </nav>
  )
}

export default Header