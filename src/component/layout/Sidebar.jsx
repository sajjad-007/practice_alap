import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { userUpdate } from '../../slice/authSlice';
import './layout.css'


const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const data = useSelector((state) => state.UserDataCon.value)
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      window.localStorage.clear();
      dispatch(userUpdate(null))
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='p-[30px] w-full h-screen text-white '>
      <div className='h-full w-full rounded-3xl flex flex-col items-center
      justify-center gap-[75px] bg-[#5F35F5] py-[24px] px-0'>
        <div className="sidebar_avatar flex items-center flex-col">
          <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
              JM
              </span>
          </div>
          <h2 className='mt-5 text-center text-white text-lg capitalize'>
            {data
              ?
              data.displayName
              :
              null
            }
          </h2>
        </div>
        <div className="sidebar_items flex flex-col gap-3">
            <NavLink to='/home'>
              <h2 className='p-3  rounded-lg capitalize cursor-pointer text-center border-2 border-solid border-white font-semibold'>home</h2>
            </NavLink>
            <NavLink to='/message'>
              <h2 className='p-3   rounded-lg capitalize cursor-pointer text-center border-2 border-solid border-white font-semibold'>message</h2>
            </NavLink>
            <NavLink to='/notification'>
              <h2 className='p-3  rounded-lg capitalize cursor-pointer text-center border-2 border-solid border-white font-semibold'>notification</h2>
            </NavLink>
            <NavLink to='/setting'>
              <h2 className='p-3   rounded-lg capitalize cursor-pointer text-center border-2 border-solid border-white font-semibold'>notification</h2>
            </NavLink>
          
        </div>
        <div className="sidebar_logout">
          <button className='p-3 inline-block rounded-lg capitalize cursor-pointer text-center border-2 border-solid border-white font-semibold' onClick={handleSignOut}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar