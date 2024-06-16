import React from 'react'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/')
  }
  return (
    <div className='p-[30px] w-full h-screen'>
      <div className='h-full w-full rounded-3xl flex flex-col items-center
      justify-center gap-[180px] bg-[#5F35F5] py-[24px] px-0'>
        <div className="sidebar_avatar ">
          <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
          </div>
        </div>
        <div className="sidebar_items">
          <h1>inner items</h1>
        </div>
        <div className="sidebar_logout">
          <button onClick={handleSignOut}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar