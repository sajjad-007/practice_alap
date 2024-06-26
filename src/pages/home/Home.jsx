import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserList from './userlist/UserList'
import FriendList from './friendlist/FriendList'


const Home = () => {
  const data = useSelector((state) => state.UserDataCon.value)
  const dispatch = useDispatch()


  //sign in data store

    return (
    <div className='p-[30px] flex gap-4'>
        <div>
          <UserList/>
        </div>
        <div>
          <FriendList/>
        </div>
    </div>
  );
}

export default Home