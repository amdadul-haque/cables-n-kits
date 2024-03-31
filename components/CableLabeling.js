import React from 'react'
import SectionHeader from './common/SectionHeader'
import MyContainer from './common/MyContainer'

const CableLabeling = () => {
  const CableLabelingServices = [
    {
      icons: "/images/labeling/icon-1.png",
      title: "Clear Identification",
      description: "Clearly identify each cable to understand its purpose and destination."
    },
    {
      icons: "/images/labeling/icon-2.png",
      title: "Reduced Errors",
      description: "Clear labels help technicians easily identify cables, minimizing the risk of incorrect connections."
    },
    {
      icons: "/images/labeling/icon-3.png",
      title: "Streamlined Maintenance",
      description: "Expedite maintenance and reduce downtime with clearly labeled cables that make it easy to know where attention is needed."
    },
    {
      icons: "/images/labeling/icon-3.png",
      title: "Improved Troubleshooting",
      description: "Allow technicians to easily trace cables and identify problems for faster troubleshooting."
    },
    {
      icons: "/images/labeling/icon-2.png",
      title: "Enhanced Scalability",
      description: "Ensure that new cables are seamlessly integrated into your existing infrastructure for enhanced scalability."
    },
    {
      icons: "/images/labeling/icon-1.png",
      title: "Professional Appearance",
      description: "Attain a neat and professional appearance with well-labeled cables."
    },
  ]
  return (
    <>
      <div className='bg-white py-10'>
        <MyContainer>
          <SectionHeader
            title="Cable Labeling Service"
            subtitle="Enhance your next cable installation with our Cable Labeling Service."
          />
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10'>
            {
              CableLabelingServices.map((service, index) => (
                <div key={index} className='flex gap-5'>
                  <div className='md:w-1/6 flex items-start'>
                    <img src={service.icons} alt={service.title} className='w-16 h-16 inline object-contain' />
                  </div>
                  <div className='w-5/6'>
                    <h3 className='text-lg sm:text-xl font-bold text-secondary-dark'>{service.title}</h3>
                    <p className='text-center sm:text-left text-text-dark font-medium max-w-[400px] md:max-w-[260px]'>{service.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>
            <img src="./images/labeling/1.jpg" alt="img" className='h-full w-full' />
            <img src="./images/labeling/2.jpg" alt="img" className='h-full w-full' />
            <img src="./images/labeling/3.jpg" alt="img" className='h-full w-full' />
          </div>
          <div className='flex justify-center'>
            <a href="#">
              <button className='bg-primary text-gray-50 text-lg px-6 py-3 rounded-full font-bold mt-10'>Get a Quoute</button>
            </a>
          </div>
        </MyContainer>
      </div>
    </>
  )
}

export default CableLabeling