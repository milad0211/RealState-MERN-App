import React from 'react'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import SignIn from './Pages/Signin';
import SignUp from './Pages/SignUp';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}
