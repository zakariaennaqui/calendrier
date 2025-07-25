import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
            <img onClick={()=>navigate('meet')} className='' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>...</p>
        </div>
        {/* centre section */}
        <div>
            <p className='text-xl font-medium mb-5'>company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>privacy policy</li>
            </ul>
        </div>
        {/* right section */}
        <div>
            <p className='text-xl font-medium mb-5'>get in touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+212-XXX-XXX-XXX</li>
                <li>Experlik@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* copyright text */}
        <hr />
        <p className='py-5 text-sm text-center'>© 2025 Experlik. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
