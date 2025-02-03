import React from 'react'

const Button = ({btnName, handleClick, styleName}) => {
  return (
    <div>
      <button className={
        `${ styleName ? styleName : 
          'bg-[var(--ele-bg-color)] px-3 py-1 rounded-3xl text-lg text-[var(--ele-hover-bg-color)] cursor-pointer transition-all duration-200 ease-in hover:shadow-xl hover:shadow-[var(--shadow-light-color)] hover:bg-[--ele-hover-bg-color] hover:text-[var(--ele-bg-color)]'}`
        } 
      onClick={()=> handleClick}> 
      {/* <button className='glowing' onClick={()=> handleClick}> */}
        {btnName}
      </button>
    </div>
  )
}

export default Button