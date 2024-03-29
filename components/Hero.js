import React from 'react'
import MyContainer from './common/MyContainer'

const Hero = () => {
  return (
    <>
      <div className='bg-hero bg-gray-600'>
        <MyContainer className="py-20 text-gray-50">
          <div className='max-w-screen-sm flex flex-col gap-5'>
            <h1 className='text-[40px] leading-snug text-gray-50 text-center sm:text-left'>Introducing: CablesAndKits Services</h1>
            <p className='text-base text-center sm:text-left'>Our committment to being true partners in IT goes beyond simply selling products. We seek to understand the unique challenges faced by our customers and deliver creative solutions to help solve problems. We are now offering CK Care Maintenance, Cable Labeling, and Kitting services. Read on to learn more.</p>
            <div className='flex justify-center sm:justify-start'>
              <button className='bg-primary text-gray-50 px-6 py-4 mt-4 rounded-md uppercase'>Learn More</button>
            </div>
          </div>
        </MyContainer>
      </div>
    </>
  )
}

export default Hero