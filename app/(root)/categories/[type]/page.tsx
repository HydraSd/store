import GetByCategory from '@/app/firebase/get-by-category'
import React from 'react'
import Card from './components/Card'


type Props = {
    params: {
        type:string
    }
}

async function CategoryPage({params}: Props) {

    const products = (await GetByCategory(params.type)).data;
    
    const name = () => {
        if(params.type === "automotive"){
            return "Automotive parts"
        } else if(params.type === "industrials"){
            return "Industrial Equipment Parts"
        } else if(params.type === "constructions"){
            return "Construction Equipment Parts"
        } else if(params.type === "bicycles"){
            return "Bicycle and Motorcycle Parts"
        } else {
            return "No results"
        }
    }
  return (
    <main className='mx-2 md:mx-20'>
        <div className='my-5 text-xl font-semibold'>{name()}</div>
        <div className=''>
            {products.map((product) => (
                <Card key={product.id} product={product}/>
            ))}
        </div>
    </main>
  )
}

export default CategoryPage