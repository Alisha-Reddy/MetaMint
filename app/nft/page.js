import React from 'react'
import { Button, Brand } from '@/components'
import { Category } from '@/components/MainPage'
import { Details } from '@/components/NFTDetails'

const page = () => {
  return (
    <div className='w-[90%] md:w-[95%] mx-auto my-4 sm:my-14'>
        <Details/>
        <Category/>
        <Brand/>
    </div>
  )
}

export default page