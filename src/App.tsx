import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Properties from './Pages/Properties'
import Saved from './Pages/Saved'
const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
