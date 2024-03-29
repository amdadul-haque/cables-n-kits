import React from 'react'

const MyContainer = ({ className, children }) => {
  return (
    <div className={`w-full max-w-screen-xl mx-auto px-4 2xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default MyContainer