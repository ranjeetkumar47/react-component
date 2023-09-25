import React from 'react'

const Image = ({ src, className, onClick, altMessage }: any) => {
  return <img src={src} className={className} onClick={onClick} alt={altMessage} />
}

export default Image
