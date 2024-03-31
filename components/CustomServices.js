import React from 'react'
import SectionHeader from './common/SectionHeader'
import MyContainer from './common/MyContainer'
import { customServices } from '@/data'

const CustomServices = () => {
  return (
    <>
      <div className='bg-white py-20'>
        <MyContainer>
          <SectionHeader
            title="Custom Services"
            subtitle="Empowering Network and Eleveting Connectivity"
          />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 gap-y-10 mt-10'>
            {
              customServices.map((service, index) => (
                <div key={index} className='flex flex-col gap-3 items-center'>
                  <img src={service.img} alt={service.title} className='w-full h-60 object-cover rounded-md' />
                  <h3 className='text-xl sm:text-2xl font-bold text-primary'>{service.title}</h3>
                  <p className='text-center text-text-light'>{service.description}</p>
                  <a href={service.learnMoreUrl} className='group'>
                    <button className='bg-secondary-light group:hover:bg-opacity-0 text-gray-50 px-6 py-3 rounded-full font-semibold'>Learn More</button>
                  </a>
                </div>
              ))
            }
          </div>
        </MyContainer>
      </div>
    </>
  )
}

export default CustomServices