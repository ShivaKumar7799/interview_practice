import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login, logout } from '../Features/UserSlice';
import ReduxToolkitParent from './ReduxToolkitParent';
function ReduxToolKItMain() {
  const userDetails = useSelector((state) => state.user.value);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{userDetails.name}</h2>
      <h2>{userDetails.age}</h2>
      <h2>{userDetails.email}</h2> 
      <button onClick={() => dispatch(login({...userDetails, name : "shiva kumar", age : 34}))} >Login</button>
      <button>Logout</button> 
      <ReduxToolkitParent />
    </div>
  )
}

export default ReduxToolKItMain