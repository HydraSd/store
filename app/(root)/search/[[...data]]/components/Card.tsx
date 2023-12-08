import Price from '@/components/Price';
import Link from 'next/link';
import React from 'react'

type Props = {
    product: Product;
}

function Card({product}: Props) {
  const imagesLinkList = product.imagesLink?.split("||");
  return (
    <Link 
     href={`/description/${product.id}`}
    className='m-2 flex bg-white p-2 border h-[180px] rounded-lg cursor-pointer'>
        <div className=''>
        <img
             width={100}
             height={100} 
             src={product.img ? product.images[0] : imagesLinkList[0]}
             alt=''
             className='h-full w-full object-cover'
            />
        </div>
        <div className='w-[70%] sm:w-[80%]'>

        <div className='truncate text-xl font-semibold'>{product.name}</div>
        <div className='my-1 text-sm  flex'>
            <div>{product.category}</div>
            <div  className='mx-2 border-l'/>
            <div>{product.type}</div>
        </div>
        <div className='truncate text-sm font-light'>{product.description}
        </div>
       
        <Price price={product.price} style='my-2' fianlValue={false}/>
        </div>
    </Link>
  )
}

export default Card