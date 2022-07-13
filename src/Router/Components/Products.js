import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <input type='text' placeholder='Search Product' />
            <nav>
                <Link to='product1'>Product1</Link>
                <Link to='product2'>Product2</Link>
            </nav>
            <Outlet />
        </>
    )
}
