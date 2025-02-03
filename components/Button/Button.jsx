import React from 'react'

const Button = ({btnName, handleClick}) => {
  return (
    <div className='box'>{/* box */}
      <button className='bg-[var(--icons-color)] px-3 py-1 border border-[var(--icons-color)] rounded-3xl text-lg text-[var(--shadow-light-color)] cursor-pointer transition-all duration-200 ease-in shadow-md shadow-gray-500 hover:bg-[var(--main-bg-color)] hover:text-[var(--icons-color)]' onClick={()=> handleClick}> {/* button */}
        {btnName}
      </button>
    </div>
  )
}

export default Button