import React from 'react'

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className=''>
      <h2 className='text-primary text-2xl sm:text-3xl text-center font-bold mb-3'>{title}</h2>
      <p className='text-base text-text-light text-center'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader