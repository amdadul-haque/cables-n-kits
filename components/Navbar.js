'use client'
import React, { useState } from 'react'
import MyContainer from './common/MyContainer'
import { ChevronDown, HelpCircle, Menu, SearchIcon, ShoppingCart, User, X } from 'lucide-react';

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

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <>
      <div className='hidden md:block w-full py-3 bg-white'>
        <div className='flex justify-center md:hidden'>
          <button onClick={() => { setTopBarOpen(!topBarOpen) }} className='mx-auto'>
            {topBarOpen ?
              <X size={16} />
              :
              <ChevronDown />
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
                888 622 0223</a>
            </span>
          </MyContainer>
        }

      </div>
      <div className='w-full py-3 bg-gray-100'>
        <MyContainer>
          <div className='w-full flex justify-between items-center'>
            <a href="" className='block lg:hidden'>
              <img src="./images/logo.png" alt="logo" className='h-8' />
            </a>
            <div className='w-full flex justify-between items-center '>
              <a href="" className='hidden lg:block'>
                <img src="./images/logo.png" alt="logo" className='h-8' />
              </a>
              <div className='flex items-center mr-3'>
                <SearchIcon className='text-primary hidden md:inline' size={16} />
                <input type="text" placeholder="Search" className='w-full xl:w-[500px] md:pl-9 h-8 md:h-10 px-3 border border-gray-300 border-r-0 rounded-md' />
                <button className='px-2 md:px-5 h-8 md:h-10 -ml-1 bg-secondary-dark text-white rounded-r-md'>
                  <span className='hidden md:inline'>Search</span>
                  <SearchIcon className="text-white md:hidden" size={16} />
                </button>
              </div>
              <button className='md:hidden'
                onClick={() => { setMobileNavOpen(!mobileNavOpen) }}>
                {
                  mobileNavOpen ?
                    <X size={16} />
                    :
                    <Menu size={20} />
                }
              </button>

              <div className='hidden right-0 md:flex items-center gap-2 md:gap-5 ml-3'>
                <a href=""><User size={20} /></a>
                <a href=""><HelpCircle size={20} /> </a>
                <a href=""> <ShoppingCart size={20} /> </a>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
      <div className='hidden md:block w-full py-3 bg-white'>
        <MyContainer className="w-full flex justify-around items-center">
          {
            bottomHeader.map((item, index) => (
              <a key={index} href={item.link} className='text-sm font-medium sm:text-base text-text-light hover:text-primary transition-all duration-300'>{item.name}</a>
            ))
          }
        </MyContainer>
      </div>
      {mobileNavOpen &&
        <div className='absolute w-[50vw] bg-white right-0 h-full top-0'>
          <div className='flex justify-end p-5'>
            <button onClick={() => { setMobileNavOpen(!mobileNavOpen) }} className=''>
              <X size={20} />
            </button>
          </div>
          <MyContainer className={`flex flex-col md:flex-row justify-end gap-y-1 gap-x-4 items-center `} >
            {
              topHeader.map((item, index) => (
                <a key={index} href={item.link} className='text-sm font-medium text-primary border-b border-b-transparent hover:border-b-primary transition-all duration-300'>{item.name}</a>
              ))
            }
            <span>
              <a href="phone:8886220223" className='text-sm font-medium text-primary border-b border-b-transparent hover:border-b-primary transition-all duration-300 flex gap-2'>
                888 622 0223</a>
            </span>
          </MyContainer>
          <div className='flex justify-center items-center mt-5 gap-5'>
            <a href=""><User size={20} /></a>
            <a href=""><HelpCircle size={20} /> </a>
            <a href=""> <ShoppingCart size={20} /> </a>
          </div>
          <MyContainer className="w-full flex flex-col justify-around items-center mt-5 gap-2">
            {
              bottomHeader.map((item, index) => (
                <a key={index} href={item.link} className='text-sm font-medium sm:text-base text-text-light hover:text-primary transition-all duration-300'>{item.name}</a>
              ))
            }
          </MyContainer>
        </div>
      }
    </>
  )
}

export default Navbar


