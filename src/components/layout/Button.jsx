import React from 'react'

const Button = ({children}) => {
  return (
    <button className='font-secondary text-lg leading-[20px] text-[#2C2643] py-[20px] px-12 rounded-[6px] bg-secondery cursor-pointer w-fit'>{children}</button>
  )
}

export default Button