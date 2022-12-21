import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../Features/CounterSlice'
function IncrementCounter() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())} >Increment</button>
    </div>
  )
}

export default IncrementCounter