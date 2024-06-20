import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const IsLoggedIn = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.UserDataCon.value)

    return (
        <div>
            {data ? <Outlet/> : <Navigate to='/'/>}
        </div>
    // <div>IsLoggedIn</div>
  )
}

export default IsLoggedIn