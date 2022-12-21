import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../Features/CounterSlice';

function DecrementCounter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value)
  return (
    <div>
      <button onClick={() => dispatch(decrement(counterValue - 1))} >Decrement</button>
    </div>
  )
}

export default DecrementCounter