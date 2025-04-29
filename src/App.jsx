import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import CaptainLogin from './components/CaptainLogin'
import CaptainSignUp from './components/CaptainSignUp'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import UserProtectedWrapper from './context/UserProtectedWrapper'
import CaptainHome from './components/CaptainHome'
import CaptainProtectedWrapper from './context/CaptainProtectedWrapper'
import Riding from './components/Riding'

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/user/login" element={<UserLogin/>}/>
          <Route path="/user/signup" element={<UserSignUp/>}/>
          <Route path="/captain/login" element={<CaptainLogin/>}/>
          <Route path="/captain/signup" element={<CaptainSignUp/>}/>
          <Route path='/riding' element={<Riding/>}/>
          <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
          <Route path='/captain/home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
        </Routes>
  )
}

export default App