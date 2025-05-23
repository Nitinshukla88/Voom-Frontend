import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1583150086267-4cc6aeecfdf6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <p className='ml-8 text-5xl font-bold'>Voom</p>
        <div className='bg-white py-4 pb-7 px-4'>
          <h2 className='text-3xl font-semibold'>Get started with Voom</h2>
          <Link to={"/user/login"}><button className='w-full bg-black text-white py-3 rounded mt-4'>Continue</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage