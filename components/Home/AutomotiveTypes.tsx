import GetData from '@/app/firebase/get-data';
import Link from 'next/link';
import React from 'react'

type Props = {}

async function AutomotiveTypes({}: Props) {
    const automotiveType = (await GetData("automotive-type")).data;
  return (
    <div className='bg-white rounded-lg'>
        <center className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {automotiveType.map((part:any) => (
                <div key={part.id}>
                    <div className='border cursor-pointer py-1'>
                        <Link
                         href={`/type/${part.name}`}
                        >
                        
                        <h2 className='font-semibold'>{part.name}</h2>
                        <img src={part.img} alt=''className='object-cover h-[150px] w-[150px]
                        hover:scale-105'/>
                        </Link>
                    </div>
                  
                </div>
            ))}
        </center>
    </div>
  )
}

export default AutomotiveTypes