import React from 'react'

const Title = ({heading, paragraph}) => {
  return (
    <div className='w-[100%]'>{/* title */}
            <h2 className='text-5xl mb-2'>{heading}</h2>
            <p>{paragraph}</p>
    </div>
  )
}

export default Title