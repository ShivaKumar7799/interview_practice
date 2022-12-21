import React from 'react'
import { logout } from '../Features/UserSlice'
import { useDispatch } from 'react-redux'
function ReduxToolkitchild() {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>ReduxToolkitchild</h3>
      <button onClick={() => dispatch(logout())} >Logout</button>
    </div>
  )
}

export default ReduxToolkitchild