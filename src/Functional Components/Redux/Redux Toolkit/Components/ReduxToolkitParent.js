import React from 'react'
import { useSelector } from 'react-redux'
import ReduxToolkitchild from './ReduxToolkitchild'

function ReduxToolkitParent() {
  console.log("parent component rendered")
  const userDetails = useSelector((state)=> state.user.value)
  return (
    <div>
      <h3>ReduxToolkitParent</h3>
      <h4>{userDetails.name}</h4>
      <ReduxToolkitchild />
    </div>
  )
}

export default ReduxToolkitParent