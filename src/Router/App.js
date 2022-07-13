import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './Components/About'
import { Admin } from './Components/Admin'
import { Home } from './Components/Home'
import { NavBar } from './Components/NavBar'
import { OrderSummery } from './Components/OrderSummery'
import { PageNotFound } from './Components/PageNotFound'
import { Product1 } from './Components/Product1'
import { Product2 } from './Components/Product2'
import { Products } from './Components/Products'
import { Users } from './Components/Users'
import { UserDetails } from './Components/UserDetails'

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/order-summery' element={<OrderSummery />} />
                <Route path='/products' element={<Products />}>
                    <Route index element={<Product1 />} />
                    <Route path='product1' element={<Product1 />} />
                    <Route path='product2' element={<Product2 />} />
                </Route>
                <Route path='users' element={<Users />}>
                    <Route path=':userId' element={<UserDetails />} />
                    <Route path='admin' element={<Admin/>} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
