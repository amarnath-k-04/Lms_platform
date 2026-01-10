import React, { useContext } from 'react'
import logo from '/src/assets/logo.png'
import { Link} from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'




function Navbar() {
    const {navigate,isEducator}=useContext(AppContext)
   const isCourseList=location.pathname.includes('/courselist')
   const {openSignIn}=useClerk()
   const {user}=useUser()
   
  return (
    <>
      <div  className={`h-16 flex items-center justify-between px-4 sm:px-10 md:px-14 border-b border-gray-500 py-4 ${isCourseList ? 'bg-white' :'bg-cyan-100/70'}`}>
        <div onClick={()=>navigate('/')} className='flex items-center'>
            <img src={logo}   alt="logo" className='h-10 lg:h-12 cursor-pointer'/>
            <span className='-ml-5 text-xl font-semibold text-gray-700 leading-none cursor-pointer  '>Acadify</span>
            </div>
       
        <div className='hidden md:flex items-center gap-5 text-gray-500'> 
          <div className='py-2 flex items-center gap-5'>
            { user&&
            <>
            <button onClick={()=>{navigate('/educator')}} >{isEducator?'Educator Dashboard':'Become Educator'}</button>
             | <Link to='/my-enrollments'>My Enrollments</Link>
             </>
            }
          </div>
          { user?<UserButton/>:
          <button onClick={()=>openSignIn()}  className='bg-blue-600 text-white py-2 px-5 rounded-full'>Create Account</button>
}
        </div>
        {/* For Phone Screens */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
           <div className='flex items-center gap-1 sm:gap-5  max-sm:text-xs'>
            { user&&
            <>
            <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>
             | <Link to='/my-enrollments'>My Enrollments</Link>
             </>
            }
           </div>
           {
            user?<UserButton/>
            :
            <button onClick={()=>openSignIn()}><i className="fa-regular fa-circle-user fa-xl"></i></button>
           }
           
        </div>
        
        </div>
     

    </>
  )
}

export default Navbar
