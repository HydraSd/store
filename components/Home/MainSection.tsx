import React from 'react'
import Categories from './Categories'
import { ArrowRight } from 'lucide-react'

type Props = {}

function MainSection({}: Props) {
  return (
    <div>
        <div className='flex items-center justify-between text-xl font-semibold'>
          <div>Categories</div>
          <ArrowRight className='text-gray-500 sm:hidden'/>
        </div>
        <Categories />
    </div>
  )
}

export default MainSection