import React from 'react'

const Product = () => {
    return (
        <div>
        <img src="/images/peproni.png" alt="pizza" />
        <div className='text-center'>
        <h2 className='text-lg font-bold py-2'>Havana Special</h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4  items-center'>Smell</span>
        </div>
        <div className='flex justify-between items-center mt-4'>
            <span>$599</span>
            <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold">Add</button>
        </div>
    </div>
    )
}

export default Product
