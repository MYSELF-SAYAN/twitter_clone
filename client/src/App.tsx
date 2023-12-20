import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import GoogleSignUp from './pages/GoogleSignUp'
import { useSelector } from 'react-redux'
function App() {
  const location = useLocation();
  const isSignupOrLogin = location.pathname === '/signup' || location.pathname === '/login';
  const data = useSelector((state: any) => state.data);
const auth=data.isAuth;
  return (
    <div className={`bg-black text-white min-h-screen ${isSignupOrLogin ? '' : 'px-[8%]'}`}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={auth? <Home /> : <Landing/>} />
        <Route path='/explore' element={auth?<Explore /> : <Landing/>} />
        <Route path='/profile' element={auth?<Profile /> : <Landing/>} />
        <Route path='/google-signup' element={<GoogleSignUp /> } />
      </Routes>
    </div>
  )
}

export default App
