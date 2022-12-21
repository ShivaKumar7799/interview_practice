import React from 'react'
import { reset } from '../../Features/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
import DecrementCounter from './DecrementCounter'
import IncrementCounter from './IncrementCounter'

function Counter() {
  const userDetails = useSelector((state) => state.user.value)
  const counterValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1> {userDetails.name} Counter : {counterValue}  </h1>
      <IncrementCounter />
      <DecrementCounter />
      <button onClick={() => dispatch(reset())} >Reset</button>
    </div>
  )
}

export default Counter