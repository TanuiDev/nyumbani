import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1 className="text-primary">Nyumbani</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    </div>
  )
}

export default Header

