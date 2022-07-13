import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
export const Users = () => {
  const [searchParams, setSearchParams]= useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
      <div>Users1</div>
      <div>Users2</div>
      <div>Users3</div>
      <Outlet />
      <button onClick= {()=> setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick= {()=> setSearchParams({})}>Reset Users</button>
      {
        showActiveUsers ? ( <h2> Showing Active Users</h2>):(<h2> Showing All Users</h2>)
      }
    </>
  )
}
