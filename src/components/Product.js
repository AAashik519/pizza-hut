import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const {image ,name ,price,size,_id} = props.product
    
    return (
        <Link to = {`/products/${_id}`}>

        <div>
        <img src={image} alt={name }/>
        <div className='text-center'>
        <h2 className='text-lg font-bold py-2'>{name} </h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4  items-center'> {size}</span>
        </div>
        <div className='flex justify-between items-center mt-4'>
            <span>$ {price}</span>
            <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold">Add</button>
        </div>
    </div>
        </Link>
    )
}

export default Product
 