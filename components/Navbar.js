'use client'
import React, { useState } from 'react'
import MyContainer from './common/MyContainer'

const Navbar = () => {
  const topHeader = [
    { name: "Customer Service", link: "/" },
    { name: "Order Tracking", link: "/" },
    { name: "Learning Center", link: "/" },
    { name: "About Us", link: "/" },
  ]
  const bottomHeader = [
    { name: "Cabling", link: "/" },
    { name: "Racks & Cabinates", link: "/" },
    { name: "Home & Office", link: "/" },
    { name: "Networking", link: "/" },
    { name: "Servers", link: "/" },
    { name: "Deals", link: "/" },
  ]
  const [topBarOpen, setTopBarOpen] = useState(true)
  return (
    <>
      <div className='w-full py-3 bg-white'>
        <div className='flex justify-center md:hidden'>
          <button onClick={() => { setTopBarOpen(!topBarOpen) }} className='mx-auto'>
            {topBarOpen ?
              <img src="./icons/chevron-down.svg" alt="close" /> :
              <img src="./icons/x.svg" alt="close" />
            }
          </button>
        </div>
        {
          topBarOpen &&
          <MyContainer className={`flex flex-col md:flex-row justify-end gap-y-1 gap-x-4 items-center `} >
            {
              topHeader.map((item, index) => (
                <a key={index} href={item.link} className='text-sm font-medium text-primary border-b border-b-transparent hover:border-b-primary transition-all duration-300'>{item.name}</a>
              ))
            }
            <span>
              <a href="phone:8886220223" className='text-sm font-medium text-primary border-b border-b-transparent hover:border-b-primary transition-all duration-300 flex gap-2'>
                <img src="./icons/phone.svg" alt="phone" />
                888 622 0223</a>
            </span>
          </MyContainer>
        }

      </div>
      <div className='w-full py-3 bg-gray-100'>
        <MyContainer>
          <div className='w-full flex justify-between items-center'>
            <a href="" className='block lg:hidden'>
              <img src="./images/logo.png" alt="logo" className='w-[120px] lg:w-[200px] ' />
            </a>
            <div className='w-full flex justify-between items-center '>
              <a href="" className='hidden lg:block'>
                <img src="./images/logo.png" alt="logo" className=' w-[120px] lg:w-[200px]' />
              </a>
              <div className='flex items-center'>
                <img src="./icons/search.svg" alt="search" className='relative left-8' />
                <input type="text" placeholder="Search" className='w-full xl:w-[500px] pl-9 h-10 px-3 border border-gray-300 border-r-0 rounded-md' />
                <button className='px-5 h-10 -ml-1 bg-secondary-dark text-white rounded-r-md'>Search</button>
              </div>
              <div className='flex items-center gap-5'>
                <a href=""><img src="./icons/person.svg" alt="profile" /></a>
                <a href=""><img src="./icons/help.svg" alt="help" /></a>
                <a href=""><img src="./icons/cart.svg" alt="cart" /></a>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
      <div className='w-full py-3 bg-white'>
        <MyContainer className="w-full flex justify-around items-center">
          {
            bottomHeader.map((item, index) => (
              <a key={index} href={item.link} className='text-sm font-medium sm:text-base text-text-light hover:text-primary transition-all duration-300'>{item.name}</a>
            ))
          }
        </MyContainer>
      </div>
    </>
  )
}

export default Navbar


