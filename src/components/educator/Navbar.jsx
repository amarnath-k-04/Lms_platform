import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import {  UserButton, useUser } from '@clerk/clerk-react'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
  const educatorData=dummyEducatorData
  const {user}=useUser()
  return (
    <>
     <div className=' flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
      <div  className='flex items-center'>
       <img src={logo}   alt="logo" className='h-10 lg:h-12 cursor-pointer'/>
       <span className='-ml-5 text-xl font-semibold text-gray-700 leading-none cursor-pointer  '>Acadify</span>
      </div>
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>Hi! {user? user.fullName:'Developers'}</p>
        {user && <UserButton/> }
      </div>
       

      </div> 
    </>
  )
}

export default Navbar
