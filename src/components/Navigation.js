import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const cartStyle = {
        display:'flex',
        background: '#F59E0D',
        padding: '5px 12px',
        borderRadius:'50px'
    }
    return (
        < >
            <nav className="container mx-auto flex items-center  justify-between py-4">
                <Link to="/">
                    <img style={{ height: 40 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className='flex  items-center'>
                    <li>
                        <Link to='/'>Home </Link>
                    </li>

                    <li className='ml-6'>
                        <Link to='/products'>Products </Link>
                    </li>
                    <li className='ml-6'>
                        <Link to='/cart'> 
                        <div  style={cartStyle}>
                            <span > 5</span>
                            <img className='ml-2 ' src="/images/cart.png" alt="cart icon" />
                        </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation
