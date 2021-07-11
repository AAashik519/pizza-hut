import React, { useEffect, useState  } from 'react'
import { useParams ,useHistory } from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct] = useState({})
    const params = useParams()
    const history =useHistory()
   
    useEffect(()=>{
        fetch(`/api/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product)
         
        })

    },[])

    const {name ,image,size ,price} = product ;
 const SingleProductImg ={
    width: '250px',
    height: '250px'
 }
     
    return (
        <div className="container mx-auto mt-12">
            <button className='mb-12 font-bold' onClick={()=>{history.goBack()} }>back</button>
            <div className='flex '>
                <img style={SingleProductImg}  src={image} alt={name} />
                <div className='ml-16'>
                    <h2 className="text-xl font-bold"> {name}</h2>
                    <p className="text-md ">{size} </p>
                    <h2 className="font-bold mt-2">${price}</h2>

                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'> Add to cart </button>
                </div>
            </div>
            
        </div>
    )
}

export default SingleProduct
