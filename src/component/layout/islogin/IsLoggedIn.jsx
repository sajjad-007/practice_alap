import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../../../pages/auth/login/Login';

const IsLoggedIn = () => {
    const data = useSelector((state) => state.UserDataCon.value)
    return (
        
          data ? <Outlet/> : <Login/>
  )
}

export default IsLoggedIn