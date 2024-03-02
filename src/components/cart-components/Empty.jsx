import React from 'react'
import { NavLink } from 'react-router-dom'

function Empty() {
    return (
        <div className='flex justify-center items-center flex-col p-5'>
            <h1>Your Cart is Empty</h1>
            <NavLink to="/" className="text-blue-700 font-bold">Continue Shopping</NavLink>
        </div>
    )
}

export default Empty