import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import { useEffect, useState } from 'react'

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/favorites", label: "Favorites" },
  { to: "/save", label: "Save" },
  { to: "/properties", label: "Properties" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Add shadow once page is scrolled, for depth
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between h-20 px-6 text-white bg-[#14231A] transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-orange-500 transition-colors duration-200"
      >
        Nyumbani
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`relative text-sm font-medium py-2 transition-colors duration-200 ${
              isActive(to) ? 'text-orange-500' : 'text-gray-200 hover:text-white'
            }`}
          >
            {label}
            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive(to) ? 'w-full' : 'w-0'
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Desktop auth links */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-sm font-medium bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Register
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        className="md:hidden text-white text-2xl hover:text-orange-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#14231A] flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-lg font-medium transition-colors duration-200 ${
              isActive(to) ? 'text-orange-500' : 'text-gray-200 hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}

        <div className="w-2/3 border-t border-white/10 my-1" />

        <Link to="/login" className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-200">
          Login
        </Link>
        <Link
          to="/register"
          className="text-lg font-medium bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Header