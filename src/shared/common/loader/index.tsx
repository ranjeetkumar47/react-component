import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="animate-bounce w-10 h-10 bg-blue-500 square-full"></div>
        ))}
      </div>
    </div>
  )
}

export default Loader
