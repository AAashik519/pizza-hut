import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const Product = (props) => {
    const [isAdding , setIsAdding]= useState(false)
  const {cart ,setCart}=  useContext(CartContext)
    const {product} = props
    const {image ,name ,price,size,_id} = props.product
    

    const addToCart=(event,product)=>{
        event.preventDefault()
        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {}
        }
        if(_cart.items[product._id]){
            _cart.items[product._id]=_cart.items[product._id] +1
        }
        else{
            _cart.items[product._id]=1
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0
        }
        _cart.totalItems += 1;

        setCart(_cart)
        setIsAdding(true)
        setTimeout(()=>{
            setIsAdding( false)
        },900)
 
    }

    return (
        <Link to = {`/products/${_id}`}>

        <div>
        <img src={image} alt={name }/>
        <div className='text-center'>
        <h2 className='text-lg font-bold py-2'>{name} </h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4  items-center'> {size}</span>
        </div>
        <div className='flex justify-between items-center mt-4'>
            <span className='font-bold'>$ {price}</span>
            <button className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'}  py-1 px-3 rounded-full font-bold`} disabled={isAdding} onClick= { (e) =>{addToCart(e,product)}} > ADD{isAdding ?'ED' : ''}</button>
        </div>
    </div>
        </Link>
    )
}

export default Product
 