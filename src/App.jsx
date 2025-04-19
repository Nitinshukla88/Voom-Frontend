import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import CaptainLogin from './components/CaptainLogin'
import CaptainSignUp from './components/CaptainSignUp'

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/login" element={<UserLogin/>}/>
          <Route path="/user/signup" element={<UserSignUp/>}/>
          <Route path="/captain/login" element={<CaptainLogin/>}/>
          <Route path="/captain/signup" element={<CaptainSignUp/>}/>
        </Routes>
  )
}

export default App