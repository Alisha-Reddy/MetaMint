"use client"
import React from 'react'

const Button = ({btnName, handleClick, styleName}) => {
  return (
    <div>
      <button className={
        `${ styleName ? styleName : 
          'bg-[var(--ele-bg-color)] px-3 py-1 rounded-3xl text-lg text-[var(--icons-color)] cursor-pointer transition-all duration-200 ease-in hover:shadow-[.5rem_.5rem_1rem] hover:shadow-[var(--shadow-light-color)] hover:bg-[--ele-hover-bg-color] hover:text-[var(--icons-dark-color)]'}`
        } 
      onClick={handleClick}> 
        {btnName}
      </button>
    </div>
  )
}

export default Button