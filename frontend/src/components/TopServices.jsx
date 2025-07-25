import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopServices = () => {

    const navigate = useNavigate()
    const {services} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>top services to book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted services.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            services.slice(0, 10).map((item, index) => (
              <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img src={item.image} alt={item.name} className='bg-blue-50' />
                <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'bg-gray-500'} text-xs font-semibold px-2 py-1 rounded-full`}>
                        <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    <div className='mt-2 flex gap-2'>
                      <button
                        onClick={(e) => {e.stopPropagation(); navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                        className='text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600'
                      >
                        Rendez-vous
                      </button>
                      <button
                        onClick={(e) => {e.stopPropagation(); navigate(`/calendar-booking/${item._id}`); scrollTo(0,0)}}
                        className='text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600'
                      >
                        Créneaux
                      </button>
                    </div>
                </div>
              </div>
            ))
        }
      </div>
      <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopServices
