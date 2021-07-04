import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
   const[products ,setProducts] = useState([])

   useEffect(() => {
     fetch('')

   }, [ ])

    return (
        <div className='container mx-auto pb-24'>
          <h1 className='text-lg font-bold my-8'>Products</h1>

          <div className='grid grid-cols-5 my-8 gap-24'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
    )
}

export default Products
