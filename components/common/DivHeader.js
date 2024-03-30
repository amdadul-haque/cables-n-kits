import React from 'react'

const DivHeader = ({ children }) => {
  return (
    <p className='text-secondary text-lg font-semibold'>
      {children}
    </p>
  )
}

export default DivHeader