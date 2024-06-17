import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex flex-row gap-[40px]  '>
      <div className="sidebar w-[230px] ">
        <Sidebar/>
      </div>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout