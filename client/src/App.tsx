import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
function App() {
  const location = useLocation();
  const isSignupOrLogin = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className={`bg-black text-white min-h-screen ${isSignupOrLogin ? '' : 'px-[8%]'}`}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
