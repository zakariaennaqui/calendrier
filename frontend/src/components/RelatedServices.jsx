import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedServices = ({speciality, docId}) => {

    const {services} =useContext(AppContext)
    const navigate = useNavigate()

    const[relDoc, setRelDocs] = useState([])

    useEffect(()=> {
        if (services.length > 0 && speciality) {
            const servicesData = services.filter(doc => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(servicesData)
        }

    },[services, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>top services to book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted services.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            relDoc.slice(0, 5).map((item, index) => (
              <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img src={item.image} alt={item.name} className='bg-blue-50' />
                <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'bg-gray-500'} text-xs font-semibold px-2 py-1 rounded-full`}>
                        <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
        }
      </div>
      <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default RelatedServices
