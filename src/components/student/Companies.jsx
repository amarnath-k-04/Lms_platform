import React from 'react'
import micrologo from '/src/assets/microsoftlogo.png'
import googlelogo from '/src/assets/googlelogo.png'
import flipkartlogo from '/src/assets/flipkartlogo.png'
import paypallogo from '/src/assets/paypallogo.png'
import amazonlogo from '/src/assets/amazonlogo.png'





function Companies() {
  return (
    <>
     <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={micrologo} alt="microsoft" className='w-20 md:w-28' />
        <img src={googlelogo} alt="google" className='w-20 md:w-28' />
        <img src={flipkartlogo} alt="flipkart" className='w-20 md:w-28' />
        <img src={paypallogo} alt="paypal" className='w-20 md:w-28' />
        <img src={amazonlogo} alt="amazon" className='w-20 md:w-28' />
      </div>
      </div> 
    </>
  )
}

export default Companies
