import React from 'react'
import MyContainer from './common/MyContainer'
import DivHeader from './common/DivHeader'

const Care = () => {
  const benefits = [
    `Comprehensive coverage for all major OEM’s including
    Cisco, Aruba, ProCurve, Dell, and many more!`,
    `Considerable cost savings over OEM support (up to 70%
      savings!)`,
    `Fast & friendly service to keep you up and running`,
    `Scalability & flexibility with a variety of service levels`,
    `Network Monitoring`,
    `24/7 Support Hotline`,
    `Certified engineers`
  ]
  const tableData = [
    "CK Care",
    "OEM Support",
    "Up to 70% Cost Savings",
    "Expensive Coverage",
    "Flexible Contracts",
    "Stiff Contracts",
    "Variety of Service Levels",
    "Standard Warranties",
    "Simplified Agreements",
    "Separate Agreements",
    "Support for EOSL Devices",
    "No Support for EOSL"
  ];
  return (
    <>
      <div className='w-full bg-gray-50 py-20'>
        <MyContainer>
          <div className='w-full flex flex-col items-center gap-3 mb-5'>
            <img src="./images/logo-care.png" alt="logo-care" className='max-w-[120px]' />
            <p className='text-base text-text-light text-center w-[70%] max-w-[1000px]'>Empower your network to thrive with CK Care Third Party Maintenance. This cost effective solution allows your network to benefit from expert support without the stiff and expensive OEM contracts.</p>
          </div>
          <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-10'>
            <div className="w-full">
              <div>
                <p className='text-xl text-secondary font-bold'>Take the Hassle Out of Sourcing and Assembling Components</p>
                <p className=''>CK Care Third Party Maintenance allows you to enjoy incredible savings (up to
                  70%) compared to traditional OEM contracts without sacrificing on quality.</p>
                <p className='mt-5'>Offering flexible contracts and comprehensive coverage for all major OEMs
                  (including Cisco, Aruba, ProCurve, Dell and more), CK Care gives you peace of
                  mind with monitoring and alerts as well as a 24/7 helpdesk run by certified
                  engineers. It’s the fast and friendly service you need to keep your network up
                  and running!</p>
              </div>
              <div className='mt-10'>
                <p className='text-xl text-secondary font-bold'>Benefits of CK Care Maintenance:</p>

                <div>
                  {benefits.map((benefit, index) => (
                    <div key={index} className='flex gap-2 mt-3'>
                      <img src="./images/check.png" alt="check" className='w-8 h-8' />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className='grid grid-cols-2'>
                {
                  tableData.map((item, index) => (
                    <div key={index} className={`flex justify-center items-center gap-2 px-2 py-3 ${index % 2 === 0 ? 'border-2 border-t-0' : 'border-b-2 border-r-2'} border-secondary ${index <= 1 && 'bg-secondary'}`}>
                      <p className={`text-center text-base sm:text-lg font-semibold ${index <= 1 ? 'text-white' : 'text-text-light'}`}>{item}</p>
                    </div>
                  ))
                }
              </div>
              <img src="./images/care.jpg" alt="" className='w-full mt-6' />
            </div>
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

export default Care