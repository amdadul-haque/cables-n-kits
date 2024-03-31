import React from 'react'
import SectionHeader from './common/SectionHeader'
import MyContainer from './common/MyContainer'

const CustomKitting = () => {
  const kittingServices = [
    {
      icons: "/images/kitting/icon-1.png",
      title: "Customized Solutions",
      description: "Our expert team works with you to understand your exact needs and create custom kits with the components you need."
    },
    {
      icons: "/images/kitting/icon-2.png",
      title: "Time-Saving Efficiency",
      description: "Our expert team works with you to understand your exact needs and create custom kits with the components you need."
    },
    {
      icons: "/images/kitting/icon-3.png",
      title: "Seamless Experience",
      description: "We provide end-to-end support and ensure that your kitting process is handled with precision and professionalism!"
    },
  ]
  return (
    <>
      <div className='bg-gray-50 py-10'>
        <MyContainer>
          <SectionHeader title="Custom Kitting" />
          <div className='flex flex-col gap-10'>
            <div className='w-full flex flex-col lg:flex-row lg:justify-between mt-10'>
              <div className="w-full lg:w-1/2">
                <h3 className='text-xl sm:text-2xl font-bold text-secondary-dark'>Take the Hassle Out of Sourcing and Assembling Components</h3>
                <div className='max-w-[500px]'>
                  <p className='mt-6'> Care Third Party Maintenance allows you to enjoy incredible savings (up to 70%) compared to traditional OEM contracts without sacrificing on quality. </p>
                  <p className='mt-5'>Offering flexible contracts and comprehensive coverage for all major OEMs (including Cisco, Aruba, ProCurve, Dell and more), CK Care gives you peace of mind with monitoring and alerts as well as a 24/7 helpdesk run by certified engineers. It’s the fast and friendly service you need to keep your network up and running!</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className='grid grid-cols-1 gap-10'>
                  {
                    kittingServices.map((service, index) => (
                      <div key={index} className='flex gap-5'>
                        <div className='w-1/6 flex items-start'>
                          <img src={service.icons} alt={service.title} className='w-20 h-20 inline object-contain' />
                        </div>
                        <div className='w-5/6'>
                          <h3 className='text-lg sm:text-xl font-bold text-secondary-dark'>{service.title}</h3>
                          <p className='text-center sm:text-left text-text-dark font-medium max-w-[400px]'>{service.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mt-10'>
              <img src="./images/kitting/1.jpg" alt="img" className='h-full w-full' />
              <img src="./images/kitting/2.jpg" alt="img" className='h-full w-full' />
            </div>
            <div className='flex justify-center'>
              <a href="#">
                <button className='bg-primary text-gray-50 text-lg px-6 py-3 rounded-full font-bold mt-10'>Get a Quoute</button>
              </a>
            </div>
          </div>
        </MyContainer>
      </div>
    </>
  )
}

export default CustomKitting