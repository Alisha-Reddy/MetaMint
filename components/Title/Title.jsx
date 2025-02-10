import React from 'react'

const Title = ({heading, paragraph}) => {
  return (
    <div className='w-[100%]'>{/* title */}
        <div className='w-[80%] mx-auto'>{/* title_box */}
            <h2 className='text-5xl'>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Title